// src/component/ConfigureAmplify.tsx
'use client';

import { Amplify } from 'aws-amplify';
import amplifyconfig from '@/amplifyconfiguration.json';

Amplify.configure(amplifyconfig, { ssr: true });   // 💡 runs once in the browser

export default function ConfigureAmplify() {
  return null;   // no UI
}
