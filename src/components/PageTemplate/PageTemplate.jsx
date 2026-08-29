import './PageTemplate.scss';

const PageTemplate = ({ children }) => (
  <main className="page-template">
    <h1>일정 관리</h1>
    <div className="content">{children}</div>
  </main>
);

export default PageTemplate;
