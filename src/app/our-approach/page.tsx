import { redirect } from 'next/navigation';

export default function OurApproachRedirect() {
  // Permanently redirect /our-approach to the merged About page anchor
  redirect('/about#our-approach');
}
