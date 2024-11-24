const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"profile":{"uri":"profile","methods":["GET","HEAD"]},"admin.dashboard":{"uri":"admin\/dashboard","methods":["GET","HEAD"]},"company.dashboard":{"uri":"company\/dashboard","methods":["GET","HEAD"]},"teacher.dashboard":{"uri":"teacher\/dashboard","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
