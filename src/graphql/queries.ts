/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      image
      images
      options
      userSub
      avgRating
      ratings
      availableNumber
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
      id
      quantity
      option
      userSub
      product {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        option
        userSub
        product {
          id
          title
          description
          image
          images
          options
          userSub
          avgRating
          ratings
          availableNumber
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartProductProductId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCartProducts = /* GraphQL */ `
  query SyncCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        option
        userSub
        product {
          id
          title
          description
          image
          images
          options
          userSub
          avgRating
          ratings
          availableNumber
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartProductProductId
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
      id
      quantity
      option
      product {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        id
        userSub
        orderProduct {
          nextToken
          startedAt
        }
        fullname
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrderProductId
      orderProductProductId
    }
  }
`;
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        option
        product {
          id
          title
          description
          image
          images
          options
          userSub
          avgRating
          ratings
          availableNumber
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        order {
          id
          userSub
          fullname
          phoneNumber
          country
          city
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderOrderProductId
        orderProductProductId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderProducts = /* GraphQL */ `
  query SyncOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        option
        product {
          id
          title
          description
          image
          images
          options
          userSub
          avgRating
          ratings
          availableNumber
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        order {
          id
          userSub
          fullname
          phoneNumber
          country
          city
          address
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        orderOrderProductId
        orderProductProductId
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userSub
      orderProduct {
        items {
          id
          quantity
          option
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderOrderProductId
          orderProductProductId
        }
        nextToken
        startedAt
      }
      fullname
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        orderProduct {
          nextToken
          startedAt
        }
        fullname
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        orderProduct {
          nextToken
          startedAt
        }
        fullname
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
