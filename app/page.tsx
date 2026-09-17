import FamilyChartClient from '@/components/FamilyChartClient';
import type { FamilyTree } from '@/types/family';

async function getFamilyData(): Promise<FamilyTree> {
  const JSON_URL =
    'https://script.google.com/macros/s/AKfycbx0VqULqtILYr-NT-kMm-1nR-WeXKZgthe1hqZ2MSzopqKjRjLZE76qY7CCt8njJXDX/exec';

  const res = await fetch(JSON_URL, {
    next: { revalidate: 60 }, // SSG + ISR
  });

  return res.json();
}

export default async function Page() {
  const data = await getFamilyData();

  return <FamilyChartClient data={data} />;
}
