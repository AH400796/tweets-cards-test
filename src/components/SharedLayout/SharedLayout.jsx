import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Skeleton from 'components/Skeleton/Skeleton';
import { AppContent, Wrapper, Main } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Wrapper>
      <AppContent>
        <Header />
        <Main>
          <Suspense fallback={<Skeleton />}>
            <Outlet />
          </Suspense>
        </Main>
      </AppContent>
      <Footer />
    </Wrapper>
  );
}
