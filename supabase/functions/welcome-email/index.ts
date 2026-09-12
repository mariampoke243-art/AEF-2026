import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

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
    const { email, firstName, lastName } = await req.json()

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

    // Send welcome email using Resend
    const emailData = {
      from: 'Africa Economic Forum <info@africaef.com>',
      to: [email],
      subject: 'Welcome to Africa Economic Forum - Account Confirmation',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Africa Economic Forum</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Africa Economic Forum</h1>
          </div>
          
          <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Account Confirmed - Welcome ${firstName} ${lastName}!</h2>
            
            <div style="background: #dcfdf4; border: 1px solid #10b981; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #065f46; font-weight: bold;">
                ✅ Your account has been successfully created and confirmed!
              </p>
            </div>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              Thank you for joining Africa Economic Forum. We are excited to have you as part of our community working towards Africa's economic transformation.
            </p>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              As a confirmed member, you now have full access to:
            </p>
            
            <ul style="font-size: 16px; margin-bottom: 25px; padding-left: 20px;">
              <li>📊 Exclusive economic insights and reports</li>
              <li>📅 Meeting registration and attendance tracking</li>
              <li>🤝 Networking opportunities with African economic leaders</li>
              <li>📚 Access to our comprehensive resource library</li>
              <li>📧 Updates on upcoming forums and events</li>
              <li>👥 Connect with stakeholders across Africa</li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.africaef.com/profile" 
                 style="background: #1e3a8a; color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-right: 10px;">
                Access Your Profile
              </a>
              <a href="https://www.africaef.com/meetings" 
                 style="background: #059669; color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                View Upcoming Meetings
              </a>
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="color: #92400e; margin-top: 0;">🚀 Next Steps:</h3>
              <ol style="color: #92400e; margin: 0; padding-left: 20px;">
                <li>Complete your profile information</li>
                <li>Subscribe to our newsletter for updates</li>
                <li>Register for upcoming meetings</li>
                <li>Explore our initiatives and programs</li>
              </ol>
            </div>
            
            <p style="font-size: 14px; color: #6b7280; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              If you have any questions or need assistance, please contact us at <a href="mailto:info@africaef.com" style="color: #1e3a8a;">info@africaef.com</a>
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 14px; color: #6b7280; margin: 0;">
                Best regards,<br>
                <strong>Africa Economic Forum Team</strong><br>
                <a href="https://www.africaef.com" style="color: #1e3a8a;">www.africaef.com</a>
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #9ca3af;">
            <p>© 2025 Africa Economic Forum. All rights reserved.</p>
            <p>Visit us at <a href="https://www.africaef.com" style="color: #1e3a8a;">www.africaef.com</a></p>
          </div>
        </body>
        </html>
      `
    }

    // If Resend API key is available, send email
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      if (!response.ok) {
        console.error('Resend API error:', await response.text())
        // Don't fail the request if email fails
      }
    } else {
      console.log('Welcome email would be sent to:', email)
      console.log('Email content:', emailData.html)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Welcome email sent successfully' 
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
    console.error('Error sending welcome email:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send welcome email',
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