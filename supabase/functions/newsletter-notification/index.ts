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
    const { email, name, source } = await req.json()

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { 
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

    // Send confirmation email to subscriber
    const subscriberEmailData = {
      from: 'Africa Economic Forum <info@africaef.com>',
      to: [email],
      subject: '✅ Newsletter Subscription Confirmed - Africa Economic Forum',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Newsletter Subscription Confirmed</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">📧 Newsletter Subscription Confirmed!</h1>
          </div>
          
          <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <div style="background: #dcfdf4; border: 1px solid #10b981; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #065f46; font-weight: bold; text-align: center;">
                ✅ You're now subscribed to our newsletter!
              </p>
            </div>
            
            <h2 style="color: #059669; margin-top: 0;">Welcome ${name || 'to our community'}!</h2>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              Thank you for subscribing to the Africa Economic Forum newsletter. You'll now receive:
            </p>
            
            <ul style="font-size: 16px; margin-bottom: 25px; padding-left: 20px;">
              <li>📊 Weekly economic insights and analysis</li>
              <li>📅 Updates on upcoming forums and meetings</li>
              <li>🎯 Exclusive reports on African economic trends</li>
              <li>🤝 Networking opportunities and events</li>
              <li>💡 Policy recommendations and initiatives</li>
              <li>🌍 Success stories from across Africa</li>
            </ul>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="color: #92400e; margin-top: 0;">📬 What's Next?</h3>
              <p style="color: #92400e; margin: 0;">
                Keep an eye on your inbox! Our next newsletter will arrive soon with the latest updates on Africa's economic landscape.
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.africaef.com" 
                 style="background: #059669; color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-right: 10px;">
                Visit Our Website
              </a>
              <a href="https://www.africaef.com/join" 
                 style="background: #1e3a8a; color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Join AEF Community
              </a>
            </div>
            
            <p style="font-size: 14px; color: #6b7280; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              You can unsubscribe at any time by clicking the unsubscribe link in our emails. For questions, contact us at <a href="mailto:info@africaef.com" style="color: #059669;">info@africaef.com</a>
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 14px; color: #6b7280; margin: 0;">
                Best regards,<br>
                <strong>Africa Economic Forum Team</strong><br>
                <a href="https://www.africaef.com" style="color: #059669;">www.africaef.com</a>
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #9ca3af;">
            <p>© 2025 Africa Economic Forum. All rights reserved.</p>
          </div>
        </body>
        </html>
      `
    }

    // Send admin notification email
    const adminEmailData = {
      from: 'AEF System <info@africaef.com>',
      to: [ADMIN_EMAIL],
      subject: `📧 New Newsletter Subscription - ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Newsletter Subscription</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%); padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 New Newsletter Subscription</h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <h2 style="color: #7c3aed; margin-top: 0;">Subscription Details</h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
                </tr>
                ${name ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Source:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${source || 'Website'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subscription Time:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.africaef.com/admin" 
                 style="background: #7c3aed; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                View Admin Dashboard
              </a>
            </div>
            
            <div style="background: #ddd6fe; border: 1px solid #8b5cf6; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #5b21b6; font-size: 14px;">
                <strong>📊 Action:</strong> A new subscriber has joined your newsletter. Consider sending them a welcome message or adding them to your mailing list.
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

    // Send emails if Resend API key is available
    if (RESEND_API_KEY) {
      // Send confirmation to subscriber
      const subscriberResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriberEmailData),
      })

      // Send notification to admin
      const adminResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminEmailData),
      })

      if (!subscriberResponse.ok || !adminResponse.ok) {
        console.error('Resend API error')
      }
    } else {
      console.log('Newsletter confirmation email would be sent to:', email)
      console.log('Admin notification would be sent to:', ADMIN_EMAIL)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Newsletter subscription confirmed and notifications sent',
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
    console.error('Error processing newsletter subscription:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process newsletter subscription',
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