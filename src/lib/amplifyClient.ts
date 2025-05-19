// src/lib/amplifyClient.ts
import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '@/amplifyconfiguration.json';

Amplify.configure(amplifyconfig, { ssr: true });   // makes this file self-contained
export const client = generateClient();            // always sees a valid config
