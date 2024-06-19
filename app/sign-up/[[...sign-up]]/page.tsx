import { CenteredContainer } from '@/components/shared/CenteredContainer';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <CenteredContainer>
      <SignUp />
    </CenteredContainer>
  );
}
