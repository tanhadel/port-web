import { client, queries } from '@/lib/sanity'
import Sidebar from './Sidebar'

export default async function SidebarWrapper() {
  let profile = null;
  
  try {
    profile = await client.fetch(queries.profile);
  } catch (error) {
    console.error('Error fetching profile for sidebar:', error);
  }

  return <Sidebar profile={profile} />;
}
