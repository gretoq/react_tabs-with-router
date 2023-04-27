import { useParams } from 'react-router-dom';
import { TabContent } from '../components/TabContent';
import { TabComponent } from '../components/TabComponent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId: selectedTabId = '' } = useParams();

  const visibleContent = tabs
    .find(tab => tab.id === selectedTabId)
    ?.content;

  return (
    <div className="container">
      <h1 className="title">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabComponent
              key={tab.id}
              tab={tab}
            />
          ))}
        </ul>
      </div>

      <TabContent tabTitle={visibleContent} />
    </div>
  );
};
