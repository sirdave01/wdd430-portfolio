import { signOut } from '@/auth';

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <button type="submit" className="shrink-0 hover:text-yellow-300">
        Sign out
      </button>
    </form>
  );
}