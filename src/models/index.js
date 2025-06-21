// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Account, Thread, ThreadGroup, Comment } = initSchema(schema);

export {
  Account,
  Thread,
  ThreadGroup,
  Comment
};