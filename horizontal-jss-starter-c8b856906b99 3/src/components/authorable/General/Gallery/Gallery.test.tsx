// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import ContentBlock from './Gallery';
import defaultData, { noData } from './Gallery.mock-data';

it('renders correctly', () => {
  const component = snapshot(ContentBlock, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/contentblock');
});

it('does not render without data', () => {
  const component = renderComponent(ContentBlock, { componentProps: noData });
  const text = component.queryByTestId('contentblock');
  expect(text).toBe(null);
});
