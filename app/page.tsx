import FamilyChartClient from '@/components/FamilyChartClient';
import type { FamilyTree } from '@/types/family';

async function getFamilyData(): Promise<FamilyTree> {
  const JSON_URL =
    'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjMmII17kvyqWtZsgmY9L-Kg7K43RXPiHmpAxtHS891d2VqxfiIVw4WuHsGWuml3UK7X6gdqXsfBrnigjo9vBHOgAH13tTg2-dzL7M5fD-Zjm401fq3aRyElISv93u1-cJ8f8YqD95cHz788fNeBeeZd8_NW8C9ZP4vOk40qFI-X-pjLGkT4ONS8QPmLAfrIX1ZC9zFSQgiMj2KvRN5_-8hCXHd4QwCt0nJBhg3_vs8HcNxqipgLU3tdVTgEDDHGSG4JLk5pfGA_Xn-TZ39lVkjcptYYg&lib=MWKxZagcBuds-MeUlhCVO_qHVcGstMHy0';

  const res = await fetch(JSON_URL, {
    next: { revalidate: 60 }, // SSG + ISR
  });

  return res.json();
}

export default async function Page() {
  const data = await getFamilyData();

  return <FamilyChartClient data={data} />;
}
