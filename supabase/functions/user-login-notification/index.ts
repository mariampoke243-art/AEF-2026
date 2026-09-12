import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'info@africaef.com'

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const { 
      email, 
      firstName, 
      lastName, 
      organization, 
      accountType, 
      loginTime,
      userAgent,
      ipAddress 
    } = await req.json()

    if (!email || !firstName || !lastName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

    // Prepare admin notification email
    const adminEmailData = {
      from: 'AEF System <info@africaef.com>',
      to: [ADMIN_EMAIL],
      subject: `🔔 New User Login - ${firstName} ${lastName} | AEF`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New User Login Notification</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🔔 New User Login Alert</h1>
            <p style="color: #fecaca; margin: 5px 0 0 0; font-size: 14px;">Africa Economic Forum</p>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <h2 style="color: #dc2626; margin-top: 0;">User Login Details</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #1e3a8a;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Account Type:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${accountType || 'Not specified'}</td>
                </tr>
                ${organization ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Organization:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${organization}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Login Time:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${new Date(loginTime || Date.now()).toLocaleString()}</td>
                </tr>
                ${userAgent ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Browser:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 12px;">${userAgent}</td>
                </tr>
                ` : ''}
                ${ipAddress ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">IP Address:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${ipAddress}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.africaef.com/admin" 
                 style="background: #dc2626; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; margin-right: 10px;">
                View Admin Dashboard
              </a>
              <a href="https://www.africaef.com/profile" 
                 style="background: #1e3a8a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                View User Profile
              </a>
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>📊 Action Required:</strong> Review this new user login and take appropriate action if needed. Consider reaching out to welcome them personally.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 14px; color: #6b7280; margin: 0;">
                This is an automated notification from<br>
                <strong>Africa Economic Forum</strong><br>
                <a href="https://www.africaef.com" style="color: #1e3a8a;">www.africaef.com</a>
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #9ca3af;">
            <p>© 2025 Africa Economic Forum - Automated System Notification</p>
          </div>
        </body>
        </html>
      `
    }

    // Send admin notification email
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminEmailData),
      })

      if (!response.ok) {
        console.error('Resend API error:', await response.text())
      }
    } else {
      console.log('Admin notification email would be sent to:', ADMIN_EMAIL)
      console.log('Email content:', adminEmailData.html)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Login notification sent successfully',
        timestamp: new Date().toISOString()
      }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )

  } catch (error) {
    console.error('Error sending login notification:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send login notification',
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