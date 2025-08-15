import register from '@rhildred/preact-custom-element';
import { SubscriberForm } from './form';
import styles from './main.scss?inline';
import './otel-tool.js'; // Use custom OpenTelemetry implementation - no package dependencies

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

register(SubscriberForm, 'x-subscriberform', [], {
  shadow: true,
  adoptedStyleSheets: [sheet],
});
