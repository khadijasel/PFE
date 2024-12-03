import React from 'react';
import DashboardMain from './DashboardMain';

export default function SpecialityPage({ params }) {
  return <DashboardMain speciality={params.type} />;
}

