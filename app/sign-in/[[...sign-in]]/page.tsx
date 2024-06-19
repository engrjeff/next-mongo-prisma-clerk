import { CenteredContainer } from '@/components/shared/CenteredContainer';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <CenteredContainer>
      <SignIn />
    </CenteredContainer>
  );
}
