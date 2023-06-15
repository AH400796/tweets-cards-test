import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { AppContent, Wrapper, Main } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

export default function SharedLayout() {
  return (
    <Wrapper>
      <AppContent>
        <Header />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
      </AppContent>
      <Footer />
    </Wrapper>
  );
}
