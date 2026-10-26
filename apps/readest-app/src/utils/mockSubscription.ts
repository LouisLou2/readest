import { UserPlan } from '@/types/quota';

const MOCK_SUBSCRIPTION_PLAN: UserPlan = 'pro';
const MOCK_SUBSCRIPTION_FLAG = 'true';

const isLocalClientRuntime = (): boolean => {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1' || host === '::1';
};

export const isMockSubscriptionEnabled = (): boolean =>
  (process.env['READEST_ENABLE_MOCK_SUBSCRIPTION'] ??
    process.env['NEXT_PUBLIC_READEST_ENABLE_MOCK_SUBSCRIPTION']) === MOCK_SUBSCRIPTION_FLAG &&
  isLocalClientRuntime();

export const applyMockSubscriptionPlan = (realPlan: UserPlan): UserPlan =>
  isMockSubscriptionEnabled() ? MOCK_SUBSCRIPTION_PLAN : realPlan;
