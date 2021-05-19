import React, { Suspense } from 'react';
import MainPage from '../../Components/MainPage';
import LoadingList from '../SearchPage/module/LoadingList';
const RecordContainer = React.lazy(() => import('./RecordContainer'));

const RecordPage = () => {
  return (
    <MainPage>
      <Suspense fallback={<LoadingList />}>
        <RecordContainer />
      </Suspense>
    </MainPage>
  );
};

export default RecordPage;
