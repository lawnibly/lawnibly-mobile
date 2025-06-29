# Lawnibly Mobile App

This is the React Native (Expo) mobile app for [Lawnibly](https://lawnibly.com), a lawn care marketplace app modeled after LawnStarter and GreenPal.

---

## 📉 Tech Stack

- React Native (Expo)
- React Navigation
- Tailwind (via nativewind)
- Backend: [lawnibly-backend](https://github.com/your-org/lawnibly-backend)
- API secured with JWT

---

## 🧑‍🚒 App Roles

- **Customer**: Book services, track jobs, make payments, rate providers
- **Provider**: View job list, accept jobs, mark as completed, receive payouts

---

## 📅 Screens (Planned)

### 🏠 General
- `SplashScreen`
- `LoginScreen`
- `RegisterScreen`

### 🧳 Customer
- `BookScreen`
- `QuoteScreen`
- `MyBookingsScreen`
- `PaymentScreen`
- `CustomerDashboard`

### 💼 Provider
- `ProviderDashboard`
- `AvailableJobsScreen`
- `JobDetailScreen`
- `CompletedJobsScreen`

---

## 🌐 API Integration

- All API requests use JWT bearer tokens from the `lawnibly-backend`
- Axios or fetch with `Authorization: Bearer <token>`
- Common API routes:
  - `POST /api/auth/login`
  - `GET /api/jobs`
  - `POST /api/jobs/:jobId/accept`
  - `POST /api/jobs/:jobId/complete`

---

## 🚀 Setup

```bash
# Install dependencies
npm install

# Start Expo
npx expo start
```

---

## 🚩 Todo for Codex

> Build a production-ready mobile app to complement Lawnibly.com:

- Booking flow with address autocomplete
- Job tracking and payment (Stripe integration)
- Role-based dashboards (Customer/Provider)
- Notifications (push/local)
- Offline caching (optional)
- Mobile-optimized, clean UI using Tailwind + nativewind
- Use secure token storage (expo-secure-store)

---

## 🚑 Target Platforms

- iOS (TestFlight)
- Android (Play Store)
- Expo Go (for development and live previews)
