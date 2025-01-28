import showdown from 'showdown';

export default function(md: string): string {
  const converter = new showdown.Converter();
  converter.setOption('openLinksInNewWindow', true);
  return converter.makeHtml(md);
}