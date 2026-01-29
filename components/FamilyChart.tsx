'use client';

import { useEffect } from 'react';
import * as f3 from 'family-chart';
import 'family-chart/styles/family-chart.css';
import type { FamilyTree } from '@/types/family';

type Props = {
  data: FamilyTree;
};

export default function FamilyChart({ data }: Props) {
  useEffect(() => {
    if (!data || data.length === 0) return;

    const chart = f3.createChart('#FamilyChart', data).setTransitionTime(1000).setCardXSpacing(250).setCardYSpacing(150).setSingleParentEmptyCard(false).setShowSiblingsOfMain(false).setOrientationVertical();

    chart
      .setCardHtml()
      .setCardDisplay([['first name', 'last name'], ['birthday']])
      .setMiniTree(true)
      .setStyle('imageRect')
      .setOnHoverPathToMain();

    // ✅ METHOD YANG MEMANG ADA
    chart.updateTree({ initial: true });
  }, [data]);

  return (
    <div
      id="FamilyChart"
      className="f3"
      style={{
        width: '100%',
        height: '900px',
        margin: 'auto',
        backgroundColor: 'rgb(33,33,33)',
        color: '#fff',
      }}
    />
  );
}
