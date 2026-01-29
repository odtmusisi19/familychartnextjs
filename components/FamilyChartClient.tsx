'use client';

import FamilyChart from './FamilyChart';
import type { FamilyTree } from '@/types/family';

type Props = {
  data: FamilyTree;
};

export default function FamilyChartClient({ data }: Props) {
  return <FamilyChart data={data} />;
}
