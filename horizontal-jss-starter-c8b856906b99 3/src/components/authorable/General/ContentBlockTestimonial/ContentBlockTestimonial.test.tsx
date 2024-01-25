// Lib
import { snapshot, hasDataComponent, renderComponent } from 'lib/testing/utils';

// Local
import Banner from './ContentBlockTestimonial';
import defaultData, { noData } from './ContentBlockTestimonial.mock-data';

it('renders correctly', () => {
  const component = snapshot(Banner, { componentProps: defaultData });
  hasDataComponent(component, 'authorable/general/banner');
});

it('does not render without data', () => {
  const component = renderComponent(Banner, { componentProps: noData });
  const text = component.queryByTestId('banner');
  expect(text).toBe(null);
});
