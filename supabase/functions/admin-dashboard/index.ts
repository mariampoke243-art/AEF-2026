import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const url = new URL(req.url)
  const action = url.searchParams.get('action')

  try {
    switch (action) {
      case 'get_users':
        // Get all users from the users table
        const { data: users, error: usersError } = await supabase
          .from('users')
          .select('*')
          .order('created_at', { ascending: false })

        if (usersError) throw usersError

        return new Response(
          JSON.stringify({ 
            success: true, 
            users: users || [],
            total: users?.length || 0
          }),
          { 
            status: 200,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        )

      case 'get_analytics':
        // Get analytics data
        const { data: analytics, error: analyticsError } = await supabase
          .from('analytics_summary')
          .select('*')
          .order('date', { ascending: false })
          .limit(30)

        const { data: recentUsers, error: recentUsersError } = await supabase
          .from('users')
          .select('created_at')
          .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())

        const { data: totalUsers, error: totalUsersError } = await supabase
          .from('users')
          .select('id', { count: 'exact' })

        const { data: meetings, error: meetingsError } = await supabase
          .from('meetings')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(10)

        return new Response(
          JSON.stringify({ 
            success: true, 
            analytics: {
              totalUsers: totalUsers?.length || 0,
              recentUsers: recentUsers?.length || 0,
              meetings: meetings || [],
              chartData: analytics || []
            }
          }),
          { 
            status: 200,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        )

      case 'get_contact_messages':
        // Get contact messages
        const { data: messages, error: messagesError } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false })

        if (messagesError) throw messagesError

        return new Response(
          JSON.stringify({ 
            success: true, 
            messages: messages || []
          }),
          { 
            status: 200,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        )

      case 'get_newsletter_subscribers':
        // Get newsletter subscribers
        const { data: subscribers, error: subscribersError } = await supabase
          .from('newsletter_subscribers')
          .select('*')
          .order('created_at', { ascending: false })

        if (subscribersError) throw subscribersError

        return new Response(
          JSON.stringify({ 
            success: true, 
            subscribers: subscribers || []
          }),
          { 
            status: 200,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        )

      case 'update_user_status':
        if (req.method !== 'POST') {
          throw new Error('Method not allowed')
        }

        const { userId, status } = await req.json()
        
        const { data: updatedUser, error: updateError } = await supabase
          .from('users')
          .update({ status })
          .eq('id', userId)
          .select()

        if (updateError) throw updateError

        return new Response(
          JSON.stringify({ 
            success: true, 
            user: updatedUser?.[0]
          }),
          { 
            status: 200,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        )

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { 
            status: 400,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        )
    }

  } catch (error) {
    console.error('Admin dashboard error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Admin dashboard operation failed',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }
})