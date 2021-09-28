import Meta from './common/Meta'

const theme = {
  shadowDark: '2px 1px 2px #c3c3c3',
  black: '#1b1f22',
  white: '#f1f1f1',
}

const Page: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
    </>
  )
}

export default Page
