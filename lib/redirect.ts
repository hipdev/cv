import Router from 'next/router';

export default function redirect({ to, res }) {
  if (process.browser) {
    Router.push(to);
  } else {
    res.writeHead(302, { Location: to });
    res.end();
  }
}
