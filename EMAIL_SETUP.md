# Email Integration Setup

This guide explains how to set up email functionality for the contact form.

## Overview

The contact form at `/contacts` uses **Resend** to send emails. When a user submits the contact form, an email is sent to your specified email address with the form details.

## Prerequisites

1. Sign up for a free Resend account at [resend.com](https://resend.com)
2. Verify your domain (or use `onboarding@resend.dev` for testing)

## Setup Instructions

### 1. Get Your Resend API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Create a new API key
3. Copy the API key (it will only be shown once)

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.example`):

```bash
# Copy the example file
cp .env.example .env.local
```

Then edit `.env.local` and add your Resend configuration:

```bash
# Resend Configuration
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

- `RESEND_API_KEY`: Your Resend API key from step 1
- `CONTACT_EMAIL`: The email address where you want to receive contact form submissions

### 3. Verify Domain (For Production)

For production use, you need to verify your domain with Resend:

1. Go to Resend Dashboard > Domains
2. Add your domain (e.g., `yourdomain.com`)
3. Add the DNS records provided by Resend
4. Wait for verification (usually takes a few minutes)

### 4. Update the "From" Email Address

Once your domain is verified, update the `from` field in `app/api/contact/route.ts`:

```typescript
from: "Contact Form <noreply@yourdomain.com>", // Change this to your verified domain
```

**Current default:** `onboarding@resend.dev` (works for testing without domain verification)

### 5. Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/contacts`

3. Fill out the form with:
   - Full Name
   - Email Address
   - Phone Number (optional)
   - Subject (required dropdown)
   - Message

4. Submit the form

5. Check your inbox (the email specified in `CONTACT_EMAIL`)

## What's Included

### Form Fields
- **Full Name** (required)
- **Email Address** (required)
- **Phone Number** (optional)
- **Subject** (required) - Dropdown with options:
  - General Inquiry
  - Project Discussion
  - Job Opportunity
  - Collaboration
  - Other
- **Message** (required)

### Email Features
- Beautiful HTML email template with gradient header
- Displays all form data in a clean, organized format
- Reply-to is set to the sender's email for easy responses
- Mobile-responsive email design
- Includes submission timestamp

### User Experience
- Loading state with spinner during submission
- Success message after email is sent
- Error handling with user-friendly error messages
- Form validation (required fields, email format)
- Form clears after successful submission

## Files Created/Modified

1. **`.env.example`** - Environment variables template
2. **`app/api/contact/route.ts`** - API endpoint for handling form submissions
3. **`components/Contact.tsx`** - Updated contact form component

## For Testing (Development)

You can use Resend's testing domain without verification:
- **From:** `onboarding@resend.dev`
- This works for development and testing
- Limited to 100 emails per day on free tier

## Troubleshooting

### Email not sending

1. Check that `RESEND_API_KEY` is set correctly in `.env.local`
2. Verify the API key is active in Resend dashboard
3. Check browser console and terminal for error messages
4. Ensure you're using a verified domain in production

### 401 Unauthorized Error

- Your API key is invalid or expired
- Get a new API key from Resend dashboard

### 403 Forbidden Error

- Your domain is not verified
- Use `onboarding@resend.dev` for testing or verify your domain

### Environment variables not loading

- Restart your development server after creating/modifying `.env.local`
- Make sure `.env.local` is in the root directory
- Check that variable names match exactly (case-sensitive)

## Security Notes

- Never commit `.env.local` to version control
- `.env.local` is already in `.gitignore`
- Keep your `RESEND_API_KEY` private
- Only share `.env.example` (without actual values)

## Resend Free Tier Limits

- 100 emails per day
- 3,000 emails per month
- Perfect for testing and small portfolios

For production sites with higher volume, consider upgrading to a paid plan.

## Support

- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

## Next Steps

1. Create your `.env.local` file with actual values
2. Test the contact form locally
3. Verify your domain for production use
4. Update the "from" email in the API route
5. Deploy and enjoy! 🚀
