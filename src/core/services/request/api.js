import interceptor from "./interceptor";

export function query(uri, query) {
  return interceptor({
    url: uri,
    method: "get",
    params: query
  });
}

export function get(uri, id = "") {
  return interceptor({
    url: uri + "/" + id,
    method: "get"
  });
}

export function post(uri, resource) {
  return interceptor.post(uri, resource);
}

export function update(uri, resource) {
  return interceptor({
    url: uri,
    method: "put",
    data: resource
  });
}

export function destroy(uri) {
  return interceptor({
    url: uri,
    method: "delete"
  });
}

export default { query, get, post, update, destroy, create };
