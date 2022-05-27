import Layout from '../components/Layout.tsx';

export default function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Layout
        title='Cadastro'
      > 
        <span>Content</span>
      </Layout>
    </div>
  )
};