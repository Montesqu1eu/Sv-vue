import eventBus from '@/views/eventBus';

export default function goToPage(pageName, pageParams) {
  eventBus.$emit('goToPage', pageName, pageParams);
}
