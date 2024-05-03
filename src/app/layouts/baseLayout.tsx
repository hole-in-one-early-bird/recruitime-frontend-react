import { Header } from '../../shared/ui/layout/Header';
import { Layout } from '../../shared/ui/layout/Layout';

export const BaseLayout = () => {
  return <Layout headerSlot={<Header />} />;
};
