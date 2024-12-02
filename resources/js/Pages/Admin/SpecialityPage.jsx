import React from 'react';
import Layout from '../Shared/Layout';

import DashboardMain from './DashboardMain';

export default function SpecialityPage({ params }) {
  return <DashboardMain speciality={params.type} />;
}

