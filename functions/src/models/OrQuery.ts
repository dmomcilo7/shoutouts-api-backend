interface OrExpressions {
  to?: string;
  from?: string;
}

export default interface orQuery {
  $or: OrExpressions[];
}
