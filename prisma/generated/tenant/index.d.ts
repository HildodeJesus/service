
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Dish
 * 
 */
export type Dish = $Result.DefaultSelection<Prisma.$DishPayload>
/**
 * Model DishItem
 * 
 */
export type DishItem = $Result.DefaultSelection<Prisma.$DishItemPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model BillItem
 * 
 */
export type BillItem = $Result.DefaultSelection<Prisma.$BillItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  admin: 'admin',
  waiter: 'waiter',
  kitchen: 'kitchen'
};

export type role = (typeof role)[keyof typeof role]


export const unit: {
  unit: 'unit',
  kg: 'kg',
  liter: 'liter'
};

export type unit = (typeof unit)[keyof typeof unit]


export const order_type: {
  dine_in: 'dine_in',
  takeout: 'takeout',
  delivery: 'delivery'
};

export type order_type = (typeof order_type)[keyof typeof order_type]


export const order_status: {
  pending: 'pending',
  preparing: 'preparing',
  delivered: 'delivered',
  canceled: 'canceled'
};

export type order_status = (typeof order_status)[keyof typeof order_status]


export const bill_status: {
  open: 'open',
  closed: 'closed'
};

export type bill_status = (typeof bill_status)[keyof typeof bill_status]


export const payment_method: {
  cash: 'cash',
  card: 'card',
  pix: 'pix'
};

export type payment_method = (typeof payment_method)[keyof typeof payment_method]


export const payment_status: {
  pending: 'pending',
  paid: 'paid'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]


export const movement_type: {
  in: 'in',
  out: 'out'
};

export type movement_type = (typeof movement_type)[keyof typeof movement_type]


export const reference_type: {
  order: 'order',
  manual_adjustment: 'manual_adjustment'
};

export type reference_type = (typeof reference_type)[keyof typeof reference_type]

}

export type role = $Enums.role

export const role: typeof $Enums.role

export type unit = $Enums.unit

export const unit: typeof $Enums.unit

export type order_type = $Enums.order_type

export const order_type: typeof $Enums.order_type

export type order_status = $Enums.order_status

export const order_status: typeof $Enums.order_status

export type bill_status = $Enums.bill_status

export const bill_status: typeof $Enums.bill_status

export type payment_method = $Enums.payment_method

export const payment_method: typeof $Enums.payment_method

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

export type movement_type = $Enums.movement_type

export const movement_type: typeof $Enums.movement_type

export type reference_type = $Enums.reference_type

export const reference_type: typeof $Enums.reference_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dish`: Exposes CRUD operations for the **Dish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dishes
    * const dishes = await prisma.dish.findMany()
    * ```
    */
  get dish(): Prisma.DishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dishItem`: Exposes CRUD operations for the **DishItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DishItems
    * const dishItems = await prisma.dishItem.findMany()
    * ```
    */
  get dishItem(): Prisma.DishItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billItem`: Exposes CRUD operations for the **BillItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillItems
    * const billItems = await prisma.billItem.findMany()
    * ```
    */
  get billItem(): Prisma.BillItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    Table: 'Table',
    Category: 'Category',
    Dish: 'Dish',
    DishItem: 'DishItem',
    Product: 'Product',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Bill: 'Bill',
    BillItem: 'BillItem',
    Payment: 'Payment',
    StockMovement: 'StockMovement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "client" | "table" | "category" | "dish" | "dishItem" | "product" | "order" | "orderItem" | "bill" | "billItem" | "payment" | "stockMovement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Dish: {
        payload: Prisma.$DishPayload<ExtArgs>
        fields: Prisma.DishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findFirst: {
            args: Prisma.DishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findMany: {
            args: Prisma.DishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          create: {
            args: Prisma.DishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          createMany: {
            args: Prisma.DishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          delete: {
            args: Prisma.DishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          update: {
            args: Prisma.DishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          deleteMany: {
            args: Prisma.DishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          upsert: {
            args: Prisma.DishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          aggregate: {
            args: Prisma.DishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDish>
          }
          groupBy: {
            args: Prisma.DishGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishCountArgs<ExtArgs>
            result: $Utils.Optional<DishCountAggregateOutputType> | number
          }
        }
      }
      DishItem: {
        payload: Prisma.$DishItemPayload<ExtArgs>
        fields: Prisma.DishItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>
          }
          findFirst: {
            args: Prisma.DishItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>
          }
          findMany: {
            args: Prisma.DishItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>[]
          }
          create: {
            args: Prisma.DishItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>
          }
          createMany: {
            args: Prisma.DishItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>[]
          }
          delete: {
            args: Prisma.DishItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>
          }
          update: {
            args: Prisma.DishItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>
          }
          deleteMany: {
            args: Prisma.DishItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>[]
          }
          upsert: {
            args: Prisma.DishItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishItemPayload>
          }
          aggregate: {
            args: Prisma.DishItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDishItem>
          }
          groupBy: {
            args: Prisma.DishItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishItemCountArgs<ExtArgs>
            result: $Utils.Optional<DishItemCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      BillItem: {
        payload: Prisma.$BillItemPayload<ExtArgs>
        fields: Prisma.BillItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          findFirst: {
            args: Prisma.BillItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          findMany: {
            args: Prisma.BillItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>[]
          }
          create: {
            args: Prisma.BillItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          createMany: {
            args: Prisma.BillItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>[]
          }
          delete: {
            args: Prisma.BillItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          update: {
            args: Prisma.BillItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          deleteMany: {
            args: Prisma.BillItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>[]
          }
          upsert: {
            args: Prisma.BillItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillItemPayload>
          }
          aggregate: {
            args: Prisma.BillItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillItem>
          }
          groupBy: {
            args: Prisma.BillItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillItemCountArgs<ExtArgs>
            result: $Utils.Optional<BillItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    table?: TableOmit
    category?: CategoryOmit
    dish?: DishOmit
    dishItem?: DishItemOmit
    product?: ProductOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    bill?: BillOmit
    billItem?: BillItemOmit
    payment?: PaymentOmit
    stockMovement?: StockMovementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    orders: number
    bills: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ClientCountOutputTypeCountOrdersArgs
    bills?: boolean | ClientCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    orders: number
    bills: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TableCountOutputTypeCountOrdersArgs
    bills?: boolean | TableCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    dishes: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishes?: boolean | CategoryCountOutputTypeCountDishesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountDishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
  }


  /**
   * Count Type DishCountOutputType
   */

  export type DishCountOutputType = {
    dishItems: number
    orderItems: number
  }

  export type DishCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishItems?: boolean | DishCountOutputTypeCountDishItemsArgs
    orderItems?: boolean | DishCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCountOutputType
     */
    select?: DishCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeCountDishItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishItemWhereInput
  }

  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    dishItems: number
    stockMovements: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishItems?: boolean | ProductCountOutputTypeCountDishItemsArgs
    stockMovements?: boolean | ProductCountOutputTypeCountStockMovementsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDishItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
    stockMovements: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
    stockMovements?: boolean | OrderCountOutputTypeCountStockMovementsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Count Type OrderItemCountOutputType
   */

  export type OrderItemCountOutputType = {
    billItems: number
  }

  export type OrderItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billItems?: boolean | OrderItemCountOutputTypeCountBillItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCountOutputType
     */
    select?: OrderItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountBillItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillItemWhereInput
  }


  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    billItems: number
    payments: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billItems?: boolean | BillCountOutputTypeCountBillItemsArgs
    payments?: boolean | BillCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountBillItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillItemWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string | null
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Client$ordersArgs<ExtArgs>
    bills?: boolean | Client$billsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Client$ordersArgs<ExtArgs>
    bills?: boolean | Client$billsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Client$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Client$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    bills<T extends Client$billsArgs<ExtArgs> = {}>(args?: Subset<T, Client$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.orders
   */
  export type Client$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Client.bills
   */
  export type Client$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    number: number | null
  }

  export type TableSumAggregateOutputType = {
    number: number | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    number: number | null
    qrcode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    number: number | null
    qrcode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    number: number
    qrcode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    number?: true
  }

  export type TableSumAggregateInputType = {
    number?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    number?: true
    qrcode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    number?: true
    qrcode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    number?: true
    qrcode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: string
    number: number
    qrcode: string
    createdAt: Date
    updatedAt: Date
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    qrcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Table$ordersArgs<ExtArgs>
    bills?: boolean | Table$billsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    qrcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["table"]>

  export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    qrcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    number?: boolean
    qrcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "qrcode" | "createdAt" | "updatedAt", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Table$ordersArgs<ExtArgs>
    bills?: boolean | Table$billsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      bills: Prisma.$BillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      qrcode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Table$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Table$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    bills<T extends Table$billsArgs<ExtArgs> = {}>(args?: Subset<T, Table$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table model
   */ 
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'String'>
    readonly number: FieldRef<"Table", 'Int'>
    readonly qrcode: FieldRef<"Table", 'String'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
    readonly updatedAt: FieldRef<"Table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table updateManyAndReturn
   */
  export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table.orders
   */
  export type Table$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Table.bills
   */
  export type Table$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    cursor?: BillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dishes?: boolean | Category$dishesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishes?: boolean | Category$dishesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      dishes: Prisma.$DishPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dishes<T extends Category$dishesArgs<ExtArgs> = {}>(args?: Subset<T, Category$dishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.dishes
   */
  export type Category$dishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    where?: DishWhereInput
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    cursor?: DishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Dish
   */

  export type AggregateDish = {
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  export type DishAvgAggregateOutputType = {
    price: Decimal | null
    cost: Decimal | null
  }

  export type DishSumAggregateOutputType = {
    price: Decimal | null
    cost: Decimal | null
  }

  export type DishMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    cost: Decimal | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DishMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    cost: Decimal | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DishCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    cost: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DishAvgAggregateInputType = {
    price?: true
    cost?: true
  }

  export type DishSumAggregateInputType = {
    price?: true
    cost?: true
  }

  export type DishMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    cost?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DishMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    cost?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DishCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    cost?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dish to aggregate.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dishes
    **/
    _count?: true | DishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishMaxAggregateInputType
  }

  export type GetDishAggregateType<T extends DishAggregateArgs> = {
        [P in keyof T & keyof AggregateDish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDish[P]>
      : GetScalarType<T[P], AggregateDish[P]>
  }




  export type DishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
    orderBy?: DishOrderByWithAggregationInput | DishOrderByWithAggregationInput[]
    by: DishScalarFieldEnum[] | DishScalarFieldEnum
    having?: DishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishCountAggregateInputType | true
    _avg?: DishAvgAggregateInputType
    _sum?: DishSumAggregateInputType
    _min?: DishMinAggregateInputType
    _max?: DishMaxAggregateInputType
  }

  export type DishGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: Decimal
    cost: Decimal
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  type GetDishGroupByPayload<T extends DishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishGroupByOutputType[P]>
            : GetScalarType<T[P], DishGroupByOutputType[P]>
        }
      >
    >


  export type DishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    cost?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    dishItems?: boolean | Dish$dishItemsArgs<ExtArgs>
    orderItems?: boolean | Dish$orderItemsArgs<ExtArgs>
    _count?: boolean | DishCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    cost?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    cost?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    cost?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "cost" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["dish"]>
  export type DishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    dishItems?: boolean | Dish$dishItemsArgs<ExtArgs>
    orderItems?: boolean | Dish$orderItemsArgs<ExtArgs>
    _count?: boolean | DishCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type DishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $DishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dish"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      dishItems: Prisma.$DishItemPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: Prisma.Decimal
      cost: Prisma.Decimal
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dish"]>
    composites: {}
  }

  type DishGetPayload<S extends boolean | null | undefined | DishDefaultArgs> = $Result.GetResult<Prisma.$DishPayload, S>

  type DishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishCountAggregateInputType | true
    }

  export interface DishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dish'], meta: { name: 'Dish' } }
    /**
     * Find zero or one Dish that matches the filter.
     * @param {DishFindUniqueArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishFindUniqueArgs>(args: SelectSubset<T, DishFindUniqueArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Dish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishFindUniqueOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishFindUniqueOrThrowArgs>(args: SelectSubset<T, DishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Dish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishFindFirstArgs>(args?: SelectSubset<T, DishFindFirstArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Dish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishFindFirstOrThrowArgs>(args?: SelectSubset<T, DishFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dishes
     * const dishes = await prisma.dish.findMany()
     * 
     * // Get first 10 Dishes
     * const dishes = await prisma.dish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishWithIdOnly = await prisma.dish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishFindManyArgs>(args?: SelectSubset<T, DishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Dish.
     * @param {DishCreateArgs} args - Arguments to create a Dish.
     * @example
     * // Create one Dish
     * const Dish = await prisma.dish.create({
     *   data: {
     *     // ... data to create a Dish
     *   }
     * })
     * 
     */
    create<T extends DishCreateArgs>(args: SelectSubset<T, DishCreateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Dishes.
     * @param {DishCreateManyArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishCreateManyArgs>(args?: SelectSubset<T, DishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dishes and returns the data saved in the database.
     * @param {DishCreateManyAndReturnArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishCreateManyAndReturnArgs>(args?: SelectSubset<T, DishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Dish.
     * @param {DishDeleteArgs} args - Arguments to delete one Dish.
     * @example
     * // Delete one Dish
     * const Dish = await prisma.dish.delete({
     *   where: {
     *     // ... filter to delete one Dish
     *   }
     * })
     * 
     */
    delete<T extends DishDeleteArgs>(args: SelectSubset<T, DishDeleteArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Dish.
     * @param {DishUpdateArgs} args - Arguments to update one Dish.
     * @example
     * // Update one Dish
     * const dish = await prisma.dish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishUpdateArgs>(args: SelectSubset<T, DishUpdateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Dishes.
     * @param {DishDeleteManyArgs} args - Arguments to filter Dishes to delete.
     * @example
     * // Delete a few Dishes
     * const { count } = await prisma.dish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishDeleteManyArgs>(args?: SelectSubset<T, DishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishUpdateManyArgs>(args: SelectSubset<T, DishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes and returns the data updated in the database.
     * @param {DishUpdateManyAndReturnArgs} args - Arguments to update many Dishes.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishUpdateManyAndReturnArgs>(args: SelectSubset<T, DishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Dish.
     * @param {DishUpsertArgs} args - Arguments to update or create a Dish.
     * @example
     * // Update or create a Dish
     * const dish = await prisma.dish.upsert({
     *   create: {
     *     // ... data to create a Dish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dish we want to update
     *   }
     * })
     */
    upsert<T extends DishUpsertArgs>(args: SelectSubset<T, DishUpsertArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCountArgs} args - Arguments to filter Dishes to count.
     * @example
     * // Count the number of Dishes
     * const count = await prisma.dish.count({
     *   where: {
     *     // ... the filter for the Dishes we want to count
     *   }
     * })
    **/
    count<T extends DishCountArgs>(
      args?: Subset<T, DishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DishAggregateArgs>(args: Subset<T, DishAggregateArgs>): Prisma.PrismaPromise<GetDishAggregateType<T>>

    /**
     * Group by Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishGroupByArgs['orderBy'] }
        : { orderBy?: DishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dish model
   */
  readonly fields: DishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    dishItems<T extends Dish$dishItemsArgs<ExtArgs> = {}>(args?: Subset<T, Dish$dishItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    orderItems<T extends Dish$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Dish$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dish model
   */ 
  interface DishFieldRefs {
    readonly id: FieldRef<"Dish", 'String'>
    readonly name: FieldRef<"Dish", 'String'>
    readonly description: FieldRef<"Dish", 'String'>
    readonly price: FieldRef<"Dish", 'Decimal'>
    readonly cost: FieldRef<"Dish", 'Decimal'>
    readonly categoryId: FieldRef<"Dish", 'String'>
    readonly createdAt: FieldRef<"Dish", 'DateTime'>
    readonly updatedAt: FieldRef<"Dish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dish findUnique
   */
  export type DishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findUniqueOrThrow
   */
  export type DishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findFirst
   */
  export type DishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findFirstOrThrow
   */
  export type DishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findMany
   */
  export type DishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish create
   */
  export type DishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to create a Dish.
     */
    data: XOR<DishCreateInput, DishUncheckedCreateInput>
  }

  /**
   * Dish createMany
   */
  export type DishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dish createManyAndReturn
   */
  export type DishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dish update
   */
  export type DishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to update a Dish.
     */
    data: XOR<DishUpdateInput, DishUncheckedUpdateInput>
    /**
     * Choose, which Dish to update.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish updateMany
   */
  export type DishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dish updateManyAndReturn
   */
  export type DishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dish upsert
   */
  export type DishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The filter to search for the Dish to update in case it exists.
     */
    where: DishWhereUniqueInput
    /**
     * In case the Dish found by the `where` argument doesn't exist, create a new Dish with this data.
     */
    create: XOR<DishCreateInput, DishUncheckedCreateInput>
    /**
     * In case the Dish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishUpdateInput, DishUncheckedUpdateInput>
  }

  /**
   * Dish delete
   */
  export type DishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter which Dish to delete.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish deleteMany
   */
  export type DishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dishes to delete
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to delete.
     */
    limit?: number
  }

  /**
   * Dish.dishItems
   */
  export type Dish$dishItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    where?: DishItemWhereInput
    orderBy?: DishItemOrderByWithRelationInput | DishItemOrderByWithRelationInput[]
    cursor?: DishItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishItemScalarFieldEnum | DishItemScalarFieldEnum[]
  }

  /**
   * Dish.orderItems
   */
  export type Dish$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Dish without action
   */
  export type DishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
  }


  /**
   * Model DishItem
   */

  export type AggregateDishItem = {
    _count: DishItemCountAggregateOutputType | null
    _avg: DishItemAvgAggregateOutputType | null
    _sum: DishItemSumAggregateOutputType | null
    _min: DishItemMinAggregateOutputType | null
    _max: DishItemMaxAggregateOutputType | null
  }

  export type DishItemAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type DishItemSumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type DishItemMinAggregateOutputType = {
    id: string | null
    dishId: string | null
    productId: string | null
    quantity: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DishItemMaxAggregateOutputType = {
    id: string | null
    dishId: string | null
    productId: string | null
    quantity: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DishItemCountAggregateOutputType = {
    id: number
    dishId: number
    productId: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DishItemAvgAggregateInputType = {
    quantity?: true
  }

  export type DishItemSumAggregateInputType = {
    quantity?: true
  }

  export type DishItemMinAggregateInputType = {
    id?: true
    dishId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DishItemMaxAggregateInputType = {
    id?: true
    dishId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DishItemCountAggregateInputType = {
    id?: true
    dishId?: true
    productId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DishItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishItem to aggregate.
     */
    where?: DishItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishItems to fetch.
     */
    orderBy?: DishItemOrderByWithRelationInput | DishItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DishItems
    **/
    _count?: true | DishItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishItemMaxAggregateInputType
  }

  export type GetDishItemAggregateType<T extends DishItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDishItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDishItem[P]>
      : GetScalarType<T[P], AggregateDishItem[P]>
  }




  export type DishItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishItemWhereInput
    orderBy?: DishItemOrderByWithAggregationInput | DishItemOrderByWithAggregationInput[]
    by: DishItemScalarFieldEnum[] | DishItemScalarFieldEnum
    having?: DishItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishItemCountAggregateInputType | true
    _avg?: DishItemAvgAggregateInputType
    _sum?: DishItemSumAggregateInputType
    _min?: DishItemMinAggregateInputType
    _max?: DishItemMaxAggregateInputType
  }

  export type DishItemGroupByOutputType = {
    id: string
    dishId: string
    productId: string
    quantity: Decimal
    createdAt: Date
    updatedAt: Date
    _count: DishItemCountAggregateOutputType | null
    _avg: DishItemAvgAggregateOutputType | null
    _sum: DishItemSumAggregateOutputType | null
    _min: DishItemMinAggregateOutputType | null
    _max: DishItemMaxAggregateOutputType | null
  }

  type GetDishItemGroupByPayload<T extends DishItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishItemGroupByOutputType[P]>
            : GetScalarType<T[P], DishItemGroupByOutputType[P]>
        }
      >
    >


  export type DishItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dishId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dish?: boolean | DishDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishItem"]>

  export type DishItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dishId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dish?: boolean | DishDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishItem"]>

  export type DishItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dishId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dish?: boolean | DishDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishItem"]>

  export type DishItemSelectScalar = {
    id?: boolean
    dishId?: boolean
    productId?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DishItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dishId" | "productId" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["dishItem"]>
  export type DishItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dish?: boolean | DishDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DishItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dish?: boolean | DishDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type DishItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dish?: boolean | DishDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $DishItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DishItem"
    objects: {
      dish: Prisma.$DishPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dishId: string
      productId: string
      quantity: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dishItem"]>
    composites: {}
  }

  type DishItemGetPayload<S extends boolean | null | undefined | DishItemDefaultArgs> = $Result.GetResult<Prisma.$DishItemPayload, S>

  type DishItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishItemCountAggregateInputType | true
    }

  export interface DishItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DishItem'], meta: { name: 'DishItem' } }
    /**
     * Find zero or one DishItem that matches the filter.
     * @param {DishItemFindUniqueArgs} args - Arguments to find a DishItem
     * @example
     * // Get one DishItem
     * const dishItem = await prisma.dishItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishItemFindUniqueArgs>(args: SelectSubset<T, DishItemFindUniqueArgs<ExtArgs>>): Prisma__DishItemClient<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DishItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishItemFindUniqueOrThrowArgs} args - Arguments to find a DishItem
     * @example
     * // Get one DishItem
     * const dishItem = await prisma.dishItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishItemFindUniqueOrThrowArgs>(args: SelectSubset<T, DishItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishItemClient<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DishItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishItemFindFirstArgs} args - Arguments to find a DishItem
     * @example
     * // Get one DishItem
     * const dishItem = await prisma.dishItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishItemFindFirstArgs>(args?: SelectSubset<T, DishItemFindFirstArgs<ExtArgs>>): Prisma__DishItemClient<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DishItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishItemFindFirstOrThrowArgs} args - Arguments to find a DishItem
     * @example
     * // Get one DishItem
     * const dishItem = await prisma.dishItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishItemFindFirstOrThrowArgs>(args?: SelectSubset<T, DishItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishItemClient<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DishItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DishItems
     * const dishItems = await prisma.dishItem.findMany()
     * 
     * // Get first 10 DishItems
     * const dishItems = await prisma.dishItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishItemWithIdOnly = await prisma.dishItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishItemFindManyArgs>(args?: SelectSubset<T, DishItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DishItem.
     * @param {DishItemCreateArgs} args - Arguments to create a DishItem.
     * @example
     * // Create one DishItem
     * const DishItem = await prisma.dishItem.create({
     *   data: {
     *     // ... data to create a DishItem
     *   }
     * })
     * 
     */
    create<T extends DishItemCreateArgs>(args: SelectSubset<T, DishItemCreateArgs<ExtArgs>>): Prisma__DishItemClient<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DishItems.
     * @param {DishItemCreateManyArgs} args - Arguments to create many DishItems.
     * @example
     * // Create many DishItems
     * const dishItem = await prisma.dishItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishItemCreateManyArgs>(args?: SelectSubset<T, DishItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DishItems and returns the data saved in the database.
     * @param {DishItemCreateManyAndReturnArgs} args - Arguments to create many DishItems.
     * @example
     * // Create many DishItems
     * const dishItem = await prisma.dishItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DishItems and only return the `id`
     * const dishItemWithIdOnly = await prisma.dishItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishItemCreateManyAndReturnArgs>(args?: SelectSubset<T, DishItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a DishItem.
     * @param {DishItemDeleteArgs} args - Arguments to delete one DishItem.
     * @example
     * // Delete one DishItem
     * const DishItem = await prisma.dishItem.delete({
     *   where: {
     *     // ... filter to delete one DishItem
     *   }
     * })
     * 
     */
    delete<T extends DishItemDeleteArgs>(args: SelectSubset<T, DishItemDeleteArgs<ExtArgs>>): Prisma__DishItemClient<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DishItem.
     * @param {DishItemUpdateArgs} args - Arguments to update one DishItem.
     * @example
     * // Update one DishItem
     * const dishItem = await prisma.dishItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishItemUpdateArgs>(args: SelectSubset<T, DishItemUpdateArgs<ExtArgs>>): Prisma__DishItemClient<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DishItems.
     * @param {DishItemDeleteManyArgs} args - Arguments to filter DishItems to delete.
     * @example
     * // Delete a few DishItems
     * const { count } = await prisma.dishItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishItemDeleteManyArgs>(args?: SelectSubset<T, DishItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DishItems
     * const dishItem = await prisma.dishItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishItemUpdateManyArgs>(args: SelectSubset<T, DishItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishItems and returns the data updated in the database.
     * @param {DishItemUpdateManyAndReturnArgs} args - Arguments to update many DishItems.
     * @example
     * // Update many DishItems
     * const dishItem = await prisma.dishItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DishItems and only return the `id`
     * const dishItemWithIdOnly = await prisma.dishItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishItemUpdateManyAndReturnArgs>(args: SelectSubset<T, DishItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one DishItem.
     * @param {DishItemUpsertArgs} args - Arguments to update or create a DishItem.
     * @example
     * // Update or create a DishItem
     * const dishItem = await prisma.dishItem.upsert({
     *   create: {
     *     // ... data to create a DishItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DishItem we want to update
     *   }
     * })
     */
    upsert<T extends DishItemUpsertArgs>(args: SelectSubset<T, DishItemUpsertArgs<ExtArgs>>): Prisma__DishItemClient<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DishItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishItemCountArgs} args - Arguments to filter DishItems to count.
     * @example
     * // Count the number of DishItems
     * const count = await prisma.dishItem.count({
     *   where: {
     *     // ... the filter for the DishItems we want to count
     *   }
     * })
    **/
    count<T extends DishItemCountArgs>(
      args?: Subset<T, DishItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DishItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DishItemAggregateArgs>(args: Subset<T, DishItemAggregateArgs>): Prisma.PrismaPromise<GetDishItemAggregateType<T>>

    /**
     * Group by DishItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DishItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishItemGroupByArgs['orderBy'] }
        : { orderBy?: DishItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DishItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DishItem model
   */
  readonly fields: DishItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DishItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dish<T extends DishDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DishDefaultArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DishItem model
   */ 
  interface DishItemFieldRefs {
    readonly id: FieldRef<"DishItem", 'String'>
    readonly dishId: FieldRef<"DishItem", 'String'>
    readonly productId: FieldRef<"DishItem", 'String'>
    readonly quantity: FieldRef<"DishItem", 'Decimal'>
    readonly createdAt: FieldRef<"DishItem", 'DateTime'>
    readonly updatedAt: FieldRef<"DishItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DishItem findUnique
   */
  export type DishItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * Filter, which DishItem to fetch.
     */
    where: DishItemWhereUniqueInput
  }

  /**
   * DishItem findUniqueOrThrow
   */
  export type DishItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * Filter, which DishItem to fetch.
     */
    where: DishItemWhereUniqueInput
  }

  /**
   * DishItem findFirst
   */
  export type DishItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * Filter, which DishItem to fetch.
     */
    where?: DishItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishItems to fetch.
     */
    orderBy?: DishItemOrderByWithRelationInput | DishItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishItems.
     */
    cursor?: DishItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishItems.
     */
    distinct?: DishItemScalarFieldEnum | DishItemScalarFieldEnum[]
  }

  /**
   * DishItem findFirstOrThrow
   */
  export type DishItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * Filter, which DishItem to fetch.
     */
    where?: DishItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishItems to fetch.
     */
    orderBy?: DishItemOrderByWithRelationInput | DishItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishItems.
     */
    cursor?: DishItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishItems.
     */
    distinct?: DishItemScalarFieldEnum | DishItemScalarFieldEnum[]
  }

  /**
   * DishItem findMany
   */
  export type DishItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * Filter, which DishItems to fetch.
     */
    where?: DishItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishItems to fetch.
     */
    orderBy?: DishItemOrderByWithRelationInput | DishItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DishItems.
     */
    cursor?: DishItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishItems.
     */
    skip?: number
    distinct?: DishItemScalarFieldEnum | DishItemScalarFieldEnum[]
  }

  /**
   * DishItem create
   */
  export type DishItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * The data needed to create a DishItem.
     */
    data: XOR<DishItemCreateInput, DishItemUncheckedCreateInput>
  }

  /**
   * DishItem createMany
   */
  export type DishItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DishItems.
     */
    data: DishItemCreateManyInput | DishItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DishItem createManyAndReturn
   */
  export type DishItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * The data used to create many DishItems.
     */
    data: DishItemCreateManyInput | DishItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DishItem update
   */
  export type DishItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * The data needed to update a DishItem.
     */
    data: XOR<DishItemUpdateInput, DishItemUncheckedUpdateInput>
    /**
     * Choose, which DishItem to update.
     */
    where: DishItemWhereUniqueInput
  }

  /**
   * DishItem updateMany
   */
  export type DishItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DishItems.
     */
    data: XOR<DishItemUpdateManyMutationInput, DishItemUncheckedUpdateManyInput>
    /**
     * Filter which DishItems to update
     */
    where?: DishItemWhereInput
    /**
     * Limit how many DishItems to update.
     */
    limit?: number
  }

  /**
   * DishItem updateManyAndReturn
   */
  export type DishItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * The data used to update DishItems.
     */
    data: XOR<DishItemUpdateManyMutationInput, DishItemUncheckedUpdateManyInput>
    /**
     * Filter which DishItems to update
     */
    where?: DishItemWhereInput
    /**
     * Limit how many DishItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DishItem upsert
   */
  export type DishItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * The filter to search for the DishItem to update in case it exists.
     */
    where: DishItemWhereUniqueInput
    /**
     * In case the DishItem found by the `where` argument doesn't exist, create a new DishItem with this data.
     */
    create: XOR<DishItemCreateInput, DishItemUncheckedCreateInput>
    /**
     * In case the DishItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishItemUpdateInput, DishItemUncheckedUpdateInput>
  }

  /**
   * DishItem delete
   */
  export type DishItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    /**
     * Filter which DishItem to delete.
     */
    where: DishItemWhereUniqueInput
  }

  /**
   * DishItem deleteMany
   */
  export type DishItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishItems to delete
     */
    where?: DishItemWhereInput
    /**
     * Limit how many DishItems to delete.
     */
    limit?: number
  }

  /**
   * DishItem without action
   */
  export type DishItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    quantity: Decimal | null
    minimumQuantity: Decimal | null
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    quantity: Decimal | null
    minimumQuantity: Decimal | null
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: Decimal | null
    minimumQuantity: Decimal | null
    unit: $Enums.unit | null
    price: Decimal | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: Decimal | null
    minimumQuantity: Decimal | null
    unit: $Enums.unit | null
    price: Decimal | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    minimumQuantity: number
    unit: number
    price: number
    picture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    quantity?: true
    minimumQuantity?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    quantity?: true
    minimumQuantity?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    minimumQuantity?: true
    unit?: true
    price?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    minimumQuantity?: true
    unit?: true
    price?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    minimumQuantity?: true
    unit?: true
    price?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    quantity: Decimal
    minimumQuantity: Decimal | null
    unit: $Enums.unit
    price: Decimal
    picture: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    minimumQuantity?: boolean
    unit?: boolean
    price?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dishItems?: boolean | Product$dishItemsArgs<ExtArgs>
    stockMovements?: boolean | Product$stockMovementsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    minimumQuantity?: boolean
    unit?: boolean
    price?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    minimumQuantity?: boolean
    unit?: boolean
    price?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    minimumQuantity?: boolean
    unit?: boolean
    price?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "minimumQuantity" | "unit" | "price" | "picture" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishItems?: boolean | Product$dishItemsArgs<ExtArgs>
    stockMovements?: boolean | Product$stockMovementsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      dishItems: Prisma.$DishItemPayload<ExtArgs>[]
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      quantity: Prisma.Decimal
      minimumQuantity: Prisma.Decimal | null
      unit: $Enums.unit
      price: Prisma.Decimal
      picture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dishItems<T extends Product$dishItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$dishItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    stockMovements<T extends Product$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly quantity: FieldRef<"Product", 'Decimal'>
    readonly minimumQuantity: FieldRef<"Product", 'Decimal'>
    readonly unit: FieldRef<"Product", 'unit'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly picture: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.dishItems
   */
  export type Product$dishItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishItem
     */
    select?: DishItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishItem
     */
    omit?: DishItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishItemInclude<ExtArgs> | null
    where?: DishItemWhereInput
    orderBy?: DishItemOrderByWithRelationInput | DishItemOrderByWithRelationInput[]
    cursor?: DishItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishItemScalarFieldEnum | DishItemScalarFieldEnum[]
  }

  /**
   * Product.stockMovements
   */
  export type Product$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    clientId: string | null
    orderType: $Enums.order_type | null
    status: $Enums.order_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    clientId: string | null
    orderType: $Enums.order_type | null
    status: $Enums.order_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    tableId: number
    clientId: number
    orderType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    tableId?: true
    clientId?: true
    orderType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    tableId?: true
    clientId?: true
    orderType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    tableId?: true
    clientId?: true
    orderType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    tableId: string | null
    clientId: string | null
    orderType: $Enums.order_type
    status: $Enums.order_status
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    clientId?: boolean
    orderType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | Order$tableArgs<ExtArgs>
    client?: boolean | Order$clientArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    stockMovements?: boolean | Order$stockMovementsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    clientId?: boolean
    orderType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | Order$tableArgs<ExtArgs>
    client?: boolean | Order$clientArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    clientId?: boolean
    orderType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | Order$tableArgs<ExtArgs>
    client?: boolean | Order$clientArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    tableId?: boolean
    clientId?: boolean
    orderType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableId" | "clientId" | "orderType" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | Order$tableArgs<ExtArgs>
    client?: boolean | Order$clientArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    stockMovements?: boolean | Order$stockMovementsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | Order$tableArgs<ExtArgs>
    client?: boolean | Order$clientArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | Order$tableArgs<ExtArgs>
    client?: boolean | Order$clientArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      table: Prisma.$TablePayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string | null
      clientId: string | null
      orderType: $Enums.order_type
      status: $Enums.order_status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends Order$tableArgs<ExtArgs> = {}>(args?: Subset<T, Order$tableArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    client<T extends Order$clientArgs<ExtArgs> = {}>(args?: Subset<T, Order$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    stockMovements<T extends Order$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Order$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly tableId: FieldRef<"Order", 'String'>
    readonly clientId: FieldRef<"Order", 'String'>
    readonly orderType: FieldRef<"Order", 'order_type'>
    readonly status: FieldRef<"Order", 'order_status'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.table
   */
  export type Order$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
  }

  /**
   * Order.client
   */
  export type Order$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.stockMovements
   */
  export type Order$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    dishId: string | null
    quantity: number | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    dishId: string | null
    quantity: number | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    dishId: number
    quantity: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    dishId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    dishId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    dishId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    dishId: string
    quantity: number
    price: Decimal
    createdAt: Date
    updatedAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    dishId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
    billItems?: boolean | OrderItem$billItemsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    dishId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    dishId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    dishId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "dishId" | "quantity" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
    billItems?: boolean | OrderItem$billItemsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      dish: Prisma.$DishPayload<ExtArgs>
      billItems: Prisma.$BillItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      dishId: string
      quantity: number
      price: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    dish<T extends DishDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DishDefaultArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    billItems<T extends OrderItem$billItemsArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$billItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly dishId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.billItems
   */
  export type OrderItem$billItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    where?: BillItemWhereInput
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    cursor?: BillItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    total: Decimal | null
  }

  export type BillSumAggregateOutputType = {
    total: Decimal | null
  }

  export type BillMinAggregateOutputType = {
    id: string | null
    tableId: string | null
    clientId: string | null
    status: $Enums.bill_status | null
    total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillMaxAggregateOutputType = {
    id: string | null
    tableId: string | null
    clientId: string | null
    status: $Enums.bill_status | null
    total: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    tableId: number
    clientId: number
    status: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    total?: true
  }

  export type BillSumAggregateInputType = {
    total?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    tableId?: true
    clientId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    tableId?: true
    clientId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    tableId?: true
    clientId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: string
    tableId: string
    clientId: string | null
    status: $Enums.bill_status
    total: Decimal
    createdAt: Date
    updatedAt: Date
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    clientId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    client?: boolean | Bill$clientArgs<ExtArgs>
    billItems?: boolean | Bill$billItemsArgs<ExtArgs>
    payments?: boolean | Bill$paymentsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    clientId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    client?: boolean | Bill$clientArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    clientId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    client?: boolean | Bill$clientArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    tableId?: boolean
    clientId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableId" | "clientId" | "status" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    client?: boolean | Bill$clientArgs<ExtArgs>
    billItems?: boolean | Bill$billItemsArgs<ExtArgs>
    payments?: boolean | Bill$paymentsArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    client?: boolean | Bill$clientArgs<ExtArgs>
  }
  export type BillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    client?: boolean | Bill$clientArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs> | null
      billItems: Prisma.$BillItemPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableId: string
      clientId: string | null
      status: $Enums.bill_status
      total: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillUpdateManyAndReturnArgs>(args: SelectSubset<T, BillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    client<T extends Bill$clientArgs<ExtArgs> = {}>(args?: Subset<T, Bill$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    billItems<T extends Bill$billItemsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$billItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    payments<T extends Bill$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bill model
   */ 
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'String'>
    readonly tableId: FieldRef<"Bill", 'String'>
    readonly clientId: FieldRef<"Bill", 'String'>
    readonly status: FieldRef<"Bill", 'bill_status'>
    readonly total: FieldRef<"Bill", 'Decimal'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
    readonly updatedAt: FieldRef<"Bill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill updateManyAndReturn
   */
  export type BillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill.client
   */
  export type Bill$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Bill.billItems
   */
  export type Bill$billItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    where?: BillItemWhereInput
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    cursor?: BillItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * Bill.payments
   */
  export type Bill$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model BillItem
   */

  export type AggregateBillItem = {
    _count: BillItemCountAggregateOutputType | null
    _min: BillItemMinAggregateOutputType | null
    _max: BillItemMaxAggregateOutputType | null
  }

  export type BillItemMinAggregateOutputType = {
    id: string | null
    billId: string | null
    orderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillItemMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    orderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillItemCountAggregateOutputType = {
    id: number
    billId: number
    orderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillItemMinAggregateInputType = {
    id?: true
    billId?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillItemMaxAggregateInputType = {
    id?: true
    billId?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillItemCountAggregateInputType = {
    id?: true
    billId?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillItem to aggregate.
     */
    where?: BillItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillItems to fetch.
     */
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillItems
    **/
    _count?: true | BillItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillItemMaxAggregateInputType
  }

  export type GetBillItemAggregateType<T extends BillItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBillItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillItem[P]>
      : GetScalarType<T[P], AggregateBillItem[P]>
  }




  export type BillItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillItemWhereInput
    orderBy?: BillItemOrderByWithAggregationInput | BillItemOrderByWithAggregationInput[]
    by: BillItemScalarFieldEnum[] | BillItemScalarFieldEnum
    having?: BillItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillItemCountAggregateInputType | true
    _min?: BillItemMinAggregateInputType
    _max?: BillItemMaxAggregateInputType
  }

  export type BillItemGroupByOutputType = {
    id: string
    billId: string
    orderId: string
    createdAt: Date
    updatedAt: Date
    _count: BillItemCountAggregateOutputType | null
    _min: BillItemMinAggregateOutputType | null
    _max: BillItemMaxAggregateOutputType | null
  }

  type GetBillItemGroupByPayload<T extends BillItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillItemGroupByOutputType[P]>
            : GetScalarType<T[P], BillItemGroupByOutputType[P]>
        }
      >
    >


  export type BillItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billItem"]>

  export type BillItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billItem"]>

  export type BillItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billItem"]>

  export type BillItemSelectScalar = {
    id?: boolean
    billId?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "orderId" | "createdAt" | "updatedAt", ExtArgs["result"]["billItem"]>
  export type BillItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }
  export type BillItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }
  export type BillItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }

  export type $BillItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillItem"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
      orderItem: Prisma.$OrderItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      orderId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billItem"]>
    composites: {}
  }

  type BillItemGetPayload<S extends boolean | null | undefined | BillItemDefaultArgs> = $Result.GetResult<Prisma.$BillItemPayload, S>

  type BillItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillItemCountAggregateInputType | true
    }

  export interface BillItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillItem'], meta: { name: 'BillItem' } }
    /**
     * Find zero or one BillItem that matches the filter.
     * @param {BillItemFindUniqueArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillItemFindUniqueArgs>(args: SelectSubset<T, BillItemFindUniqueArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BillItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillItemFindUniqueOrThrowArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BillItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BillItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindFirstArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillItemFindFirstArgs>(args?: SelectSubset<T, BillItemFindFirstArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BillItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindFirstOrThrowArgs} args - Arguments to find a BillItem
     * @example
     * // Get one BillItem
     * const billItem = await prisma.billItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BillItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BillItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillItems
     * const billItems = await prisma.billItem.findMany()
     * 
     * // Get first 10 BillItems
     * const billItems = await prisma.billItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billItemWithIdOnly = await prisma.billItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillItemFindManyArgs>(args?: SelectSubset<T, BillItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BillItem.
     * @param {BillItemCreateArgs} args - Arguments to create a BillItem.
     * @example
     * // Create one BillItem
     * const BillItem = await prisma.billItem.create({
     *   data: {
     *     // ... data to create a BillItem
     *   }
     * })
     * 
     */
    create<T extends BillItemCreateArgs>(args: SelectSubset<T, BillItemCreateArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BillItems.
     * @param {BillItemCreateManyArgs} args - Arguments to create many BillItems.
     * @example
     * // Create many BillItems
     * const billItem = await prisma.billItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillItemCreateManyArgs>(args?: SelectSubset<T, BillItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillItems and returns the data saved in the database.
     * @param {BillItemCreateManyAndReturnArgs} args - Arguments to create many BillItems.
     * @example
     * // Create many BillItems
     * const billItem = await prisma.billItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillItems and only return the `id`
     * const billItemWithIdOnly = await prisma.billItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BillItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a BillItem.
     * @param {BillItemDeleteArgs} args - Arguments to delete one BillItem.
     * @example
     * // Delete one BillItem
     * const BillItem = await prisma.billItem.delete({
     *   where: {
     *     // ... filter to delete one BillItem
     *   }
     * })
     * 
     */
    delete<T extends BillItemDeleteArgs>(args: SelectSubset<T, BillItemDeleteArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BillItem.
     * @param {BillItemUpdateArgs} args - Arguments to update one BillItem.
     * @example
     * // Update one BillItem
     * const billItem = await prisma.billItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillItemUpdateArgs>(args: SelectSubset<T, BillItemUpdateArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BillItems.
     * @param {BillItemDeleteManyArgs} args - Arguments to filter BillItems to delete.
     * @example
     * // Delete a few BillItems
     * const { count } = await prisma.billItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillItemDeleteManyArgs>(args?: SelectSubset<T, BillItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillItems
     * const billItem = await prisma.billItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillItemUpdateManyArgs>(args: SelectSubset<T, BillItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillItems and returns the data updated in the database.
     * @param {BillItemUpdateManyAndReturnArgs} args - Arguments to update many BillItems.
     * @example
     * // Update many BillItems
     * const billItem = await prisma.billItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillItems and only return the `id`
     * const billItemWithIdOnly = await prisma.billItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BillItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one BillItem.
     * @param {BillItemUpsertArgs} args - Arguments to update or create a BillItem.
     * @example
     * // Update or create a BillItem
     * const billItem = await prisma.billItem.upsert({
     *   create: {
     *     // ... data to create a BillItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillItem we want to update
     *   }
     * })
     */
    upsert<T extends BillItemUpsertArgs>(args: SelectSubset<T, BillItemUpsertArgs<ExtArgs>>): Prisma__BillItemClient<$Result.GetResult<Prisma.$BillItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BillItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemCountArgs} args - Arguments to filter BillItems to count.
     * @example
     * // Count the number of BillItems
     * const count = await prisma.billItem.count({
     *   where: {
     *     // ... the filter for the BillItems we want to count
     *   }
     * })
    **/
    count<T extends BillItemCountArgs>(
      args?: Subset<T, BillItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillItemAggregateArgs>(args: Subset<T, BillItemAggregateArgs>): Prisma.PrismaPromise<GetBillItemAggregateType<T>>

    /**
     * Group by BillItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillItemGroupByArgs['orderBy'] }
        : { orderBy?: BillItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillItem model
   */
  readonly fields: BillItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BillItem model
   */ 
  interface BillItemFieldRefs {
    readonly id: FieldRef<"BillItem", 'String'>
    readonly billId: FieldRef<"BillItem", 'String'>
    readonly orderId: FieldRef<"BillItem", 'String'>
    readonly createdAt: FieldRef<"BillItem", 'DateTime'>
    readonly updatedAt: FieldRef<"BillItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillItem findUnique
   */
  export type BillItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItem to fetch.
     */
    where: BillItemWhereUniqueInput
  }

  /**
   * BillItem findUniqueOrThrow
   */
  export type BillItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItem to fetch.
     */
    where: BillItemWhereUniqueInput
  }

  /**
   * BillItem findFirst
   */
  export type BillItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItem to fetch.
     */
    where?: BillItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillItems to fetch.
     */
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillItems.
     */
    cursor?: BillItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillItems.
     */
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * BillItem findFirstOrThrow
   */
  export type BillItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItem to fetch.
     */
    where?: BillItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillItems to fetch.
     */
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillItems.
     */
    cursor?: BillItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillItems.
     */
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * BillItem findMany
   */
  export type BillItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter, which BillItems to fetch.
     */
    where?: BillItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillItems to fetch.
     */
    orderBy?: BillItemOrderByWithRelationInput | BillItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillItems.
     */
    cursor?: BillItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillItems.
     */
    skip?: number
    distinct?: BillItemScalarFieldEnum | BillItemScalarFieldEnum[]
  }

  /**
   * BillItem create
   */
  export type BillItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BillItem.
     */
    data: XOR<BillItemCreateInput, BillItemUncheckedCreateInput>
  }

  /**
   * BillItem createMany
   */
  export type BillItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillItems.
     */
    data: BillItemCreateManyInput | BillItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillItem createManyAndReturn
   */
  export type BillItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * The data used to create many BillItems.
     */
    data: BillItemCreateManyInput | BillItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillItem update
   */
  export type BillItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BillItem.
     */
    data: XOR<BillItemUpdateInput, BillItemUncheckedUpdateInput>
    /**
     * Choose, which BillItem to update.
     */
    where: BillItemWhereUniqueInput
  }

  /**
   * BillItem updateMany
   */
  export type BillItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillItems.
     */
    data: XOR<BillItemUpdateManyMutationInput, BillItemUncheckedUpdateManyInput>
    /**
     * Filter which BillItems to update
     */
    where?: BillItemWhereInput
    /**
     * Limit how many BillItems to update.
     */
    limit?: number
  }

  /**
   * BillItem updateManyAndReturn
   */
  export type BillItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * The data used to update BillItems.
     */
    data: XOR<BillItemUpdateManyMutationInput, BillItemUncheckedUpdateManyInput>
    /**
     * Filter which BillItems to update
     */
    where?: BillItemWhereInput
    /**
     * Limit how many BillItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillItem upsert
   */
  export type BillItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BillItem to update in case it exists.
     */
    where: BillItemWhereUniqueInput
    /**
     * In case the BillItem found by the `where` argument doesn't exist, create a new BillItem with this data.
     */
    create: XOR<BillItemCreateInput, BillItemUncheckedCreateInput>
    /**
     * In case the BillItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillItemUpdateInput, BillItemUncheckedUpdateInput>
  }

  /**
   * BillItem delete
   */
  export type BillItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
    /**
     * Filter which BillItem to delete.
     */
    where: BillItemWhereUniqueInput
  }

  /**
   * BillItem deleteMany
   */
  export type BillItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillItems to delete
     */
    where?: BillItemWhereInput
    /**
     * Limit how many BillItems to delete.
     */
    limit?: number
  }

  /**
   * BillItem without action
   */
  export type BillItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillItem
     */
    select?: BillItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillItem
     */
    omit?: BillItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    billId: string | null
    amount: Decimal | null
    paymentMethod: $Enums.payment_method | null
    status: $Enums.payment_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    amount: Decimal | null
    paymentMethod: $Enums.payment_method | null
    status: $Enums.payment_status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    billId: number
    amount: number
    paymentMethod: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    billId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    billId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    billId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    billId: string
    amount: Decimal
    paymentMethod: $Enums.payment_method
    status: $Enums.payment_status
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    billId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "billId" | "amount" | "paymentMethod" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      amount: Prisma.Decimal
      paymentMethod: $Enums.payment_method
      status: $Enums.payment_status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly billId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paymentMethod: FieldRef<"Payment", 'payment_method'>
    readonly status: FieldRef<"Payment", 'payment_status'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type StockMovementSumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: string | null
    productId: string | null
    quantity: Decimal | null
    movementType: $Enums.movement_type | null
    referenceId: string | null
    referenceType: $Enums.reference_type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    quantity: Decimal | null
    movementType: $Enums.movement_type | null
    referenceId: string | null
    referenceType: $Enums.reference_type | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    productId: number
    quantity: number
    movementType: number
    referenceId: number
    referenceType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    quantity?: true
  }

  export type StockMovementSumAggregateInputType = {
    quantity?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    movementType?: true
    referenceId?: true
    referenceType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    movementType?: true
    referenceId?: true
    referenceType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    movementType?: true
    referenceId?: true
    referenceType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: string
    productId: string
    quantity: Decimal
    movementType: $Enums.movement_type
    referenceId: string | null
    referenceType: $Enums.reference_type
    createdAt: Date
    updatedAt: Date
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    quantity?: boolean
    movementType?: boolean
    referenceId?: boolean
    referenceType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | StockMovement$orderArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    quantity?: boolean
    movementType?: boolean
    referenceId?: boolean
    referenceType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | StockMovement$orderArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    quantity?: boolean
    movementType?: boolean
    referenceId?: boolean
    referenceType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | StockMovement$orderArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectScalar = {
    id?: boolean
    productId?: boolean
    quantity?: boolean
    movementType?: boolean
    referenceId?: boolean
    referenceType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StockMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "quantity" | "movementType" | "referenceId" | "referenceType" | "createdAt" | "updatedAt", ExtArgs["result"]["stockMovement"]>
  export type StockMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | StockMovement$orderArgs<ExtArgs>
  }
  export type StockMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | StockMovement$orderArgs<ExtArgs>
  }
  export type StockMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    order?: boolean | StockMovement$orderArgs<ExtArgs>
  }

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      quantity: Prisma.Decimal
      movementType: $Enums.movement_type
      referenceId: string | null
      referenceType: $Enums.reference_type
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMovements and returns the data saved in the database.
     * @param {StockMovementCreateManyAndReturnArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements and returns the data updated in the database.
     * @param {StockMovementUpdateManyAndReturnArgs} args - Arguments to update many StockMovements.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, StockMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    order<T extends StockMovement$orderArgs<ExtArgs> = {}>(args?: Subset<T, StockMovement$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockMovement model
   */ 
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'String'>
    readonly productId: FieldRef<"StockMovement", 'String'>
    readonly quantity: FieldRef<"StockMovement", 'Decimal'>
    readonly movementType: FieldRef<"StockMovement", 'movement_type'>
    readonly referenceId: FieldRef<"StockMovement", 'String'>
    readonly referenceType: FieldRef<"StockMovement", 'reference_type'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
    readonly updatedAt: FieldRef<"StockMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement createManyAndReturn
   */
  export type StockMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
  }

  /**
   * StockMovement updateManyAndReturn
   */
  export type StockMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to delete.
     */
    limit?: number
  }

  /**
   * StockMovement.order
   */
  export type StockMovement$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    number: 'number',
    qrcode: 'qrcode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const DishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    cost: 'cost',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DishScalarFieldEnum = (typeof DishScalarFieldEnum)[keyof typeof DishScalarFieldEnum]


  export const DishItemScalarFieldEnum: {
    id: 'id',
    dishId: 'dishId',
    productId: 'productId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DishItemScalarFieldEnum = (typeof DishItemScalarFieldEnum)[keyof typeof DishItemScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    minimumQuantity: 'minimumQuantity',
    unit: 'unit',
    price: 'price',
    picture: 'picture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    clientId: 'clientId',
    orderType: 'orderType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    dishId: 'dishId',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    clientId: 'clientId',
    status: 'status',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const BillItemScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    orderId: 'orderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillItemScalarFieldEnum = (typeof BillItemScalarFieldEnum)[keyof typeof BillItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    quantity: 'quantity',
    movementType: 'movementType',
    referenceId: 'referenceId',
    referenceType: 'referenceType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'unit'
   */
  export type EnumunitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'unit'>
    


  /**
   * Reference to a field of type 'unit[]'
   */
  export type ListEnumunitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'unit[]'>
    


  /**
   * Reference to a field of type 'order_type'
   */
  export type Enumorder_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_type'>
    


  /**
   * Reference to a field of type 'order_type[]'
   */
  export type ListEnumorder_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_type[]'>
    


  /**
   * Reference to a field of type 'order_status'
   */
  export type Enumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status'>
    


  /**
   * Reference to a field of type 'order_status[]'
   */
  export type ListEnumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status[]'>
    


  /**
   * Reference to a field of type 'bill_status'
   */
  export type Enumbill_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bill_status'>
    


  /**
   * Reference to a field of type 'bill_status[]'
   */
  export type ListEnumbill_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bill_status[]'>
    


  /**
   * Reference to a field of type 'payment_method'
   */
  export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>
    


  /**
   * Reference to a field of type 'payment_method[]'
   */
  export type ListEnumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method[]'>
    


  /**
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'payment_status[]'
   */
  export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>
    


  /**
   * Reference to a field of type 'movement_type'
   */
  export type Enummovement_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'movement_type'>
    


  /**
   * Reference to a field of type 'movement_type[]'
   */
  export type ListEnummovement_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'movement_type[]'>
    


  /**
   * Reference to a field of type 'reference_type'
   */
  export type Enumreference_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reference_type'>
    


  /**
   * Reference to a field of type 'reference_type[]'
   */
  export type ListEnumreference_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reference_type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumroleFilter<"User"> | $Enums.role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumroleFilter<"User"> | $Enums.role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumroleWithAggregatesFilter<"User"> | $Enums.role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringNullableFilter<"Client"> | string | null
    phone?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    orders?: OrderListRelationFilter
    bills?: BillListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringNullableFilter<"Client"> | string | null
    phone?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    orders?: OrderListRelationFilter
    bills?: BillListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: StringFilter<"Table"> | string
    number?: IntFilter<"Table"> | number
    qrcode?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    orders?: OrderListRelationFilter
    bills?: BillListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    qrcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    bills?: BillOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    number?: IntFilter<"Table"> | number
    qrcode?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    orders?: OrderListRelationFilter
    bills?: BillListRelationFilter
  }, "id">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    qrcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Table"> | string
    number?: IntWithAggregatesFilter<"Table"> | number
    qrcode?: StringWithAggregatesFilter<"Table"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    dishes?: DishListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dishes?: DishOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    dishes?: DishListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type DishWhereInput = {
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    id?: StringFilter<"Dish"> | string
    name?: StringFilter<"Dish"> | string
    description?: StringNullableFilter<"Dish"> | string | null
    price?: DecimalFilter<"Dish"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"Dish"> | Decimal | DecimalJsLike | number | string
    categoryId?: StringFilter<"Dish"> | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    dishItems?: DishItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type DishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    cost?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    dishItems?: DishItemOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type DishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    name?: StringFilter<"Dish"> | string
    description?: StringNullableFilter<"Dish"> | string | null
    price?: DecimalFilter<"Dish"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"Dish"> | Decimal | DecimalJsLike | number | string
    categoryId?: StringFilter<"Dish"> | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    dishItems?: DishItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type DishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    cost?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DishCountOrderByAggregateInput
    _avg?: DishAvgOrderByAggregateInput
    _max?: DishMaxOrderByAggregateInput
    _min?: DishMinOrderByAggregateInput
    _sum?: DishSumOrderByAggregateInput
  }

  export type DishScalarWhereWithAggregatesInput = {
    AND?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    OR?: DishScalarWhereWithAggregatesInput[]
    NOT?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dish"> | string
    name?: StringWithAggregatesFilter<"Dish"> | string
    description?: StringNullableWithAggregatesFilter<"Dish"> | string | null
    price?: DecimalWithAggregatesFilter<"Dish"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalWithAggregatesFilter<"Dish"> | Decimal | DecimalJsLike | number | string
    categoryId?: StringWithAggregatesFilter<"Dish"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dish"> | Date | string
  }

  export type DishItemWhereInput = {
    AND?: DishItemWhereInput | DishItemWhereInput[]
    OR?: DishItemWhereInput[]
    NOT?: DishItemWhereInput | DishItemWhereInput[]
    id?: StringFilter<"DishItem"> | string
    dishId?: StringFilter<"DishItem"> | string
    productId?: StringFilter<"DishItem"> | string
    quantity?: DecimalFilter<"DishItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DishItem"> | Date | string
    updatedAt?: DateTimeFilter<"DishItem"> | Date | string
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type DishItemOrderByWithRelationInput = {
    id?: SortOrder
    dishId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dish?: DishOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type DishItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DishItemWhereInput | DishItemWhereInput[]
    OR?: DishItemWhereInput[]
    NOT?: DishItemWhereInput | DishItemWhereInput[]
    dishId?: StringFilter<"DishItem"> | string
    productId?: StringFilter<"DishItem"> | string
    quantity?: DecimalFilter<"DishItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DishItem"> | Date | string
    updatedAt?: DateTimeFilter<"DishItem"> | Date | string
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type DishItemOrderByWithAggregationInput = {
    id?: SortOrder
    dishId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DishItemCountOrderByAggregateInput
    _avg?: DishItemAvgOrderByAggregateInput
    _max?: DishItemMaxOrderByAggregateInput
    _min?: DishItemMinOrderByAggregateInput
    _sum?: DishItemSumOrderByAggregateInput
  }

  export type DishItemScalarWhereWithAggregatesInput = {
    AND?: DishItemScalarWhereWithAggregatesInput | DishItemScalarWhereWithAggregatesInput[]
    OR?: DishItemScalarWhereWithAggregatesInput[]
    NOT?: DishItemScalarWhereWithAggregatesInput | DishItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DishItem"> | string
    dishId?: StringWithAggregatesFilter<"DishItem"> | string
    productId?: StringWithAggregatesFilter<"DishItem"> | string
    quantity?: DecimalWithAggregatesFilter<"DishItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DishItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DishItem"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minimumQuantity?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFilter<"Product"> | $Enums.unit
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    picture?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    dishItems?: DishItemListRelationFilter
    stockMovements?: StockMovementListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    minimumQuantity?: SortOrderInput | SortOrder
    unit?: SortOrder
    price?: SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dishItems?: DishItemOrderByRelationAggregateInput
    stockMovements?: StockMovementOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    quantity?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minimumQuantity?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFilter<"Product"> | $Enums.unit
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    picture?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    dishItems?: DishItemListRelationFilter
    stockMovements?: StockMovementListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    minimumQuantity?: SortOrderInput | SortOrder
    unit?: SortOrder
    price?: SortOrder
    picture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    quantity?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    minimumQuantity?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitWithAggregatesFilter<"Product"> | $Enums.unit
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    picture?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    tableId?: StringNullableFilter<"Order"> | string | null
    clientId?: StringNullableFilter<"Order"> | string | null
    orderType?: Enumorder_typeFilter<"Order"> | $Enums.order_type
    status?: Enumorder_statusFilter<"Order"> | $Enums.order_status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    table?: XOR<TableNullableScalarRelationFilter, TableWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    stockMovements?: StockMovementListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    orderType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    table?: TableOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    stockMovements?: StockMovementOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    tableId?: StringNullableFilter<"Order"> | string | null
    clientId?: StringNullableFilter<"Order"> | string | null
    orderType?: Enumorder_typeFilter<"Order"> | $Enums.order_type
    status?: Enumorder_statusFilter<"Order"> | $Enums.order_status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    table?: XOR<TableNullableScalarRelationFilter, TableWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    stockMovements?: StockMovementListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    orderType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    tableId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    orderType?: Enumorder_typeWithAggregatesFilter<"Order"> | $Enums.order_type
    status?: Enumorder_statusWithAggregatesFilter<"Order"> | $Enums.order_status
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    dishId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
    billItems?: BillItemListRelationFilter
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    dish?: DishOrderByWithRelationInput
    billItems?: BillItemOrderByRelationAggregateInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    dishId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
    billItems?: BillItemListRelationFilter
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    dishId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: StringFilter<"Bill"> | string
    tableId?: StringFilter<"Bill"> | string
    clientId?: StringNullableFilter<"Bill"> | string | null
    status?: Enumbill_statusFilter<"Bill"> | $Enums.bill_status
    total?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    billItems?: BillItemListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrder
    clientId?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    table?: TableOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    billItems?: BillItemOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    tableId?: StringFilter<"Bill"> | string
    clientId?: StringNullableFilter<"Bill"> | string | null
    status?: Enumbill_statusFilter<"Bill"> | $Enums.bill_status
    total?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    billItems?: BillItemListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrder
    clientId?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bill"> | string
    tableId?: StringWithAggregatesFilter<"Bill"> | string
    clientId?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    status?: Enumbill_statusWithAggregatesFilter<"Bill"> | $Enums.bill_status
    total?: DecimalWithAggregatesFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
  }

  export type BillItemWhereInput = {
    AND?: BillItemWhereInput | BillItemWhereInput[]
    OR?: BillItemWhereInput[]
    NOT?: BillItemWhereInput | BillItemWhereInput[]
    id?: StringFilter<"BillItem"> | string
    billId?: StringFilter<"BillItem"> | string
    orderId?: StringFilter<"BillItem"> | string
    createdAt?: DateTimeFilter<"BillItem"> | Date | string
    updatedAt?: DateTimeFilter<"BillItem"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
  }

  export type BillItemOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bill?: BillOrderByWithRelationInput
    orderItem?: OrderItemOrderByWithRelationInput
  }

  export type BillItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillItemWhereInput | BillItemWhereInput[]
    OR?: BillItemWhereInput[]
    NOT?: BillItemWhereInput | BillItemWhereInput[]
    billId?: StringFilter<"BillItem"> | string
    orderId?: StringFilter<"BillItem"> | string
    createdAt?: DateTimeFilter<"BillItem"> | Date | string
    updatedAt?: DateTimeFilter<"BillItem"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
  }, "id">

  export type BillItemOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillItemCountOrderByAggregateInput
    _max?: BillItemMaxOrderByAggregateInput
    _min?: BillItemMinOrderByAggregateInput
  }

  export type BillItemScalarWhereWithAggregatesInput = {
    AND?: BillItemScalarWhereWithAggregatesInput | BillItemScalarWhereWithAggregatesInput[]
    OR?: BillItemScalarWhereWithAggregatesInput[]
    NOT?: BillItemScalarWhereWithAggregatesInput | BillItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillItem"> | string
    billId?: StringWithAggregatesFilter<"BillItem"> | string
    orderId?: StringWithAggregatesFilter<"BillItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BillItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BillItem"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    billId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFilter<"Payment"> | $Enums.payment_method
    status?: Enumpayment_statusFilter<"Payment"> | $Enums.payment_status
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    billId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFilter<"Payment"> | $Enums.payment_method
    status?: Enumpayment_statusFilter<"Payment"> | $Enums.payment_status
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    bill?: XOR<BillScalarRelationFilter, BillWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    billId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodWithAggregatesFilter<"Payment"> | $Enums.payment_method
    status?: Enumpayment_statusWithAggregatesFilter<"Payment"> | $Enums.payment_status
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    productId?: StringFilter<"StockMovement"> | string
    quantity?: DecimalFilter<"StockMovement"> | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFilter<"StockMovement"> | $Enums.movement_type
    referenceId?: StringNullableFilter<"StockMovement"> | string | null
    referenceType?: Enumreference_typeFilter<"StockMovement"> | $Enums.reference_type
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    movementType?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    productId?: StringFilter<"StockMovement"> | string
    quantity?: DecimalFilter<"StockMovement"> | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFilter<"StockMovement"> | $Enums.movement_type
    referenceId?: StringNullableFilter<"StockMovement"> | string | null
    referenceType?: Enumreference_typeFilter<"StockMovement"> | $Enums.reference_type
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    movementType?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMovement"> | string
    productId?: StringWithAggregatesFilter<"StockMovement"> | string
    quantity?: DecimalWithAggregatesFilter<"StockMovement"> | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeWithAggregatesFilter<"StockMovement"> | $Enums.movement_type
    referenceId?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    referenceType?: Enumreference_typeWithAggregatesFilter<"StockMovement"> | $Enums.reference_type
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutClientInput
    bills?: BillCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutClientInput
    bills?: BillUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutClientNestedInput
    bills?: BillUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutClientNestedInput
    bills?: BillUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateInput = {
    id?: string
    number: number
    qrcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutTableInput
    bills?: BillCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    number: number
    qrcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
    bills?: BillUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    qrcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutTableNestedInput
    bills?: BillUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    qrcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
    bills?: BillUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    number: number
    qrcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    qrcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    qrcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishes?: DishCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishes?: DishUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishes?: DishUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishes?: DishUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutDishesInput
    dishItems?: DishItemCreateNestedManyWithoutDishInput
    orderItems?: OrderItemCreateNestedManyWithoutDishInput
  }

  export type DishUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishItems?: DishItemUncheckedCreateNestedManyWithoutDishInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutDishesNestedInput
    dishItems?: DishItemUpdateManyWithoutDishNestedInput
    orderItems?: OrderItemUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishItems?: DishItemUncheckedUpdateManyWithoutDishNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutDishNestedInput
  }

  export type DishCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishItemCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dish: DishCreateNestedOneWithoutDishItemsInput
    product: ProductCreateNestedOneWithoutDishItemsInput
  }

  export type DishItemUncheckedCreateInput = {
    id?: string
    dishId: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dish?: DishUpdateOneRequiredWithoutDishItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutDishItemsNestedInput
  }

  export type DishItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishItemCreateManyInput = {
    id?: string
    dishId: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    minimumQuantity?: Decimal | DecimalJsLike | number | string | null
    unit?: $Enums.unit
    price: Decimal | DecimalJsLike | number | string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dishItems?: DishItemCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    minimumQuantity?: Decimal | DecimalJsLike | number | string | null
    unit?: $Enums.unit
    price: Decimal | DecimalJsLike | number | string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dishItems?: DishItemUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumQuantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFieldUpdateOperationsInput | $Enums.unit
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishItems?: DishItemUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumQuantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFieldUpdateOperationsInput | $Enums.unit
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishItems?: DishItemUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    minimumQuantity?: Decimal | DecimalJsLike | number | string | null
    unit?: $Enums.unit
    price: Decimal | DecimalJsLike | number | string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumQuantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFieldUpdateOperationsInput | $Enums.unit
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumQuantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFieldUpdateOperationsInput | $Enums.unit
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TableCreateNestedOneWithoutOrdersInput
    client?: ClientCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    stockMovements?: StockMovementCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    tableId?: string | null
    clientId?: string | null
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutOrdersNestedInput
    client?: ClientUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    stockMovements?: StockMovementUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    tableId?: string | null
    clientId?: string | null
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    dish: DishCreateNestedOneWithoutOrderItemsInput
    billItems?: BillItemCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    dishId: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    billItems?: BillItemUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    dish?: DishUpdateOneRequiredWithoutOrderItemsNestedInput
    billItems?: BillItemUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billItems?: BillItemUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    dishId: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateInput = {
    id?: string
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutBillsInput
    client?: ClientCreateNestedOneWithoutBillsInput
    billItems?: BillItemCreateNestedManyWithoutBillInput
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: string
    tableId: string
    clientId?: string | null
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    billItems?: BillItemUncheckedCreateNestedManyWithoutBillInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutBillsNestedInput
    client?: ClientUpdateOneWithoutBillsNestedInput
    billItems?: BillItemUpdateManyWithoutBillNestedInput
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billItems?: BillItemUncheckedUpdateManyWithoutBillNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: string
    tableId: string
    clientId?: string | null
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bill: BillCreateNestedOneWithoutBillItemsInput
    orderItem: OrderItemCreateNestedOneWithoutBillItemsInput
  }

  export type BillItemUncheckedCreateInput = {
    id?: string
    billId: string
    orderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutBillItemsNestedInput
    orderItem?: OrderItemUpdateOneRequiredWithoutBillItemsNestedInput
  }

  export type BillItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemCreateManyInput = {
    id?: string
    billId: string
    orderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.payment_method
    status?: $Enums.payment_status
    createdAt?: Date | string
    updatedAt?: Date | string
    bill: BillCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    billId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.payment_method
    status?: $Enums.payment_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    billId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.payment_method
    status?: $Enums.payment_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockMovementsInput
    order?: OrderCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceId?: string | null
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockMovementsNestedInput
    order?: OrderUpdateOneWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceId?: string | null
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type BillListRelationFilter = {
    every?: BillWhereInput
    some?: BillWhereInput
    none?: BillWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    qrcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    qrcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    qrcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DishListRelationFilter = {
    every?: DishWhereInput
    some?: DishWhereInput
    none?: DishWhereInput
  }

  export type DishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type DishItemListRelationFilter = {
    every?: DishItemWhereInput
    some?: DishItemWhereInput
    none?: DishItemWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type DishItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishAvgOrderByAggregateInput = {
    price?: SortOrder
    cost?: SortOrder
  }

  export type DishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishSumOrderByAggregateInput = {
    price?: SortOrder
    cost?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DishScalarRelationFilter = {
    is?: DishWhereInput
    isNot?: DishWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type DishItemCountOrderByAggregateInput = {
    id?: SortOrder
    dishId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DishItemMaxOrderByAggregateInput = {
    id?: SortOrder
    dishId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishItemMinOrderByAggregateInput = {
    id?: SortOrder
    dishId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumunitFilter<$PrismaModel = never> = {
    equals?: $Enums.unit | EnumunitFieldRefInput<$PrismaModel>
    in?: $Enums.unit[] | ListEnumunitFieldRefInput<$PrismaModel>
    notIn?: $Enums.unit[] | ListEnumunitFieldRefInput<$PrismaModel>
    not?: NestedEnumunitFilter<$PrismaModel> | $Enums.unit
  }

  export type StockMovementListRelationFilter = {
    every?: StockMovementWhereInput
    some?: StockMovementWhereInput
    none?: StockMovementWhereInput
  }

  export type StockMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    minimumQuantity?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    quantity?: SortOrder
    minimumQuantity?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    minimumQuantity?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    minimumQuantity?: SortOrder
    unit?: SortOrder
    price?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    quantity?: SortOrder
    minimumQuantity?: SortOrder
    price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumunitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.unit | EnumunitFieldRefInput<$PrismaModel>
    in?: $Enums.unit[] | ListEnumunitFieldRefInput<$PrismaModel>
    notIn?: $Enums.unit[] | ListEnumunitFieldRefInput<$PrismaModel>
    not?: NestedEnumunitWithAggregatesFilter<$PrismaModel> | $Enums.unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumunitFilter<$PrismaModel>
    _max?: NestedEnumunitFilter<$PrismaModel>
  }

  export type Enumorder_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.order_type | Enumorder_typeFieldRefInput<$PrismaModel>
    in?: $Enums.order_type[] | ListEnumorder_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_type[] | ListEnumorder_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_typeFilter<$PrismaModel> | $Enums.order_type
  }

  export type Enumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type TableNullableScalarRelationFilter = {
    is?: TableWhereInput | null
    isNot?: TableWhereInput | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    clientId?: SortOrder
    orderType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    clientId?: SortOrder
    orderType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    clientId?: SortOrder
    orderType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Enumorder_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_type | Enumorder_typeFieldRefInput<$PrismaModel>
    in?: $Enums.order_type[] | ListEnumorder_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_type[] | ListEnumorder_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_typeWithAggregatesFilter<$PrismaModel> | $Enums.order_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_typeFilter<$PrismaModel>
    _max?: NestedEnumorder_typeFilter<$PrismaModel>
  }

  export type Enumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type BillItemListRelationFilter = {
    every?: BillItemWhereInput
    some?: BillItemWhereInput
    none?: BillItemWhereInput
  }

  export type BillItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type Enumbill_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.bill_status | Enumbill_statusFieldRefInput<$PrismaModel>
    in?: $Enums.bill_status[] | ListEnumbill_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.bill_status[] | ListEnumbill_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbill_statusFilter<$PrismaModel> | $Enums.bill_status
  }

  export type TableScalarRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    clientId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type Enumbill_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bill_status | Enumbill_statusFieldRefInput<$PrismaModel>
    in?: $Enums.bill_status[] | ListEnumbill_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.bill_status[] | ListEnumbill_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbill_statusWithAggregatesFilter<$PrismaModel> | $Enums.bill_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbill_statusFilter<$PrismaModel>
    _max?: NestedEnumbill_statusFilter<$PrismaModel>
  }

  export type BillScalarRelationFilter = {
    is?: BillWhereInput
    isNot?: BillWhereInput
  }

  export type OrderItemScalarRelationFilter = {
    is?: OrderItemWhereInput
    isNot?: OrderItemWhereInput
  }

  export type BillItemCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillItemMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillItemMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Enumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type Enumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Enumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type Enumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type Enummovement_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.movement_type | Enummovement_typeFieldRefInput<$PrismaModel>
    in?: $Enums.movement_type[] | ListEnummovement_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.movement_type[] | ListEnummovement_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummovement_typeFilter<$PrismaModel> | $Enums.movement_type
  }

  export type Enumreference_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.reference_type | Enumreference_typeFieldRefInput<$PrismaModel>
    in?: $Enums.reference_type[] | ListEnumreference_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.reference_type[] | ListEnumreference_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumreference_typeFilter<$PrismaModel> | $Enums.reference_type
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    movementType?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    movementType?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    movementType?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type Enummovement_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movement_type | Enummovement_typeFieldRefInput<$PrismaModel>
    in?: $Enums.movement_type[] | ListEnummovement_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.movement_type[] | ListEnummovement_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummovement_typeWithAggregatesFilter<$PrismaModel> | $Enums.movement_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummovement_typeFilter<$PrismaModel>
    _max?: NestedEnummovement_typeFilter<$PrismaModel>
  }

  export type Enumreference_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reference_type | Enumreference_typeFieldRefInput<$PrismaModel>
    in?: $Enums.reference_type[] | ListEnumreference_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.reference_type[] | ListEnumreference_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumreference_typeWithAggregatesFilter<$PrismaModel> | $Enums.reference_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreference_typeFilter<$PrismaModel>
    _max?: NestedEnumreference_typeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutClientInput = {
    create?: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput> | BillCreateWithoutClientInput[] | BillUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BillCreateOrConnectWithoutClientInput | BillCreateOrConnectWithoutClientInput[]
    createMany?: BillCreateManyClientInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput> | BillCreateWithoutClientInput[] | BillUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BillCreateOrConnectWithoutClientInput | BillCreateOrConnectWithoutClientInput[]
    createMany?: BillCreateManyClientInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrderUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BillUpdateManyWithoutClientNestedInput = {
    create?: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput> | BillCreateWithoutClientInput[] | BillUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BillCreateOrConnectWithoutClientInput | BillCreateOrConnectWithoutClientInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutClientInput | BillUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BillCreateManyClientInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutClientInput | BillUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BillUpdateManyWithWhereWithoutClientInput | BillUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput> | BillCreateWithoutClientInput[] | BillUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BillCreateOrConnectWithoutClientInput | BillCreateOrConnectWithoutClientInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutClientInput | BillUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BillCreateManyClientInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutClientInput | BillUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BillUpdateManyWithWhereWithoutClientInput | BillUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BillCreateNestedManyWithoutTableInput = {
    create?: XOR<BillCreateWithoutTableInput, BillUncheckedCreateWithoutTableInput> | BillCreateWithoutTableInput[] | BillUncheckedCreateWithoutTableInput[]
    connectOrCreate?: BillCreateOrConnectWithoutTableInput | BillCreateOrConnectWithoutTableInput[]
    createMany?: BillCreateManyTableInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<BillCreateWithoutTableInput, BillUncheckedCreateWithoutTableInput> | BillCreateWithoutTableInput[] | BillUncheckedCreateWithoutTableInput[]
    connectOrCreate?: BillCreateOrConnectWithoutTableInput | BillCreateOrConnectWithoutTableInput[]
    createMany?: BillCreateManyTableInputEnvelope
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BillUpdateManyWithoutTableNestedInput = {
    create?: XOR<BillCreateWithoutTableInput, BillUncheckedCreateWithoutTableInput> | BillCreateWithoutTableInput[] | BillUncheckedCreateWithoutTableInput[]
    connectOrCreate?: BillCreateOrConnectWithoutTableInput | BillCreateOrConnectWithoutTableInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutTableInput | BillUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: BillCreateManyTableInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutTableInput | BillUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: BillUpdateManyWithWhereWithoutTableInput | BillUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BillUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<BillCreateWithoutTableInput, BillUncheckedCreateWithoutTableInput> | BillCreateWithoutTableInput[] | BillUncheckedCreateWithoutTableInput[]
    connectOrCreate?: BillCreateOrConnectWithoutTableInput | BillCreateOrConnectWithoutTableInput[]
    upsert?: BillUpsertWithWhereUniqueWithoutTableInput | BillUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: BillCreateManyTableInputEnvelope
    set?: BillWhereUniqueInput | BillWhereUniqueInput[]
    disconnect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    delete?: BillWhereUniqueInput | BillWhereUniqueInput[]
    connect?: BillWhereUniqueInput | BillWhereUniqueInput[]
    update?: BillUpdateWithWhereUniqueWithoutTableInput | BillUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: BillUpdateManyWithWhereWithoutTableInput | BillUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: BillScalarWhereInput | BillScalarWhereInput[]
  }

  export type DishCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DishCreateWithoutCategoryInput, DishUncheckedCreateWithoutCategoryInput> | DishCreateWithoutCategoryInput[] | DishUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DishCreateOrConnectWithoutCategoryInput | DishCreateOrConnectWithoutCategoryInput[]
    createMany?: DishCreateManyCategoryInputEnvelope
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
  }

  export type DishUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DishCreateWithoutCategoryInput, DishUncheckedCreateWithoutCategoryInput> | DishCreateWithoutCategoryInput[] | DishUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DishCreateOrConnectWithoutCategoryInput | DishCreateOrConnectWithoutCategoryInput[]
    createMany?: DishCreateManyCategoryInputEnvelope
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
  }

  export type DishUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DishCreateWithoutCategoryInput, DishUncheckedCreateWithoutCategoryInput> | DishCreateWithoutCategoryInput[] | DishUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DishCreateOrConnectWithoutCategoryInput | DishCreateOrConnectWithoutCategoryInput[]
    upsert?: DishUpsertWithWhereUniqueWithoutCategoryInput | DishUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DishCreateManyCategoryInputEnvelope
    set?: DishWhereUniqueInput | DishWhereUniqueInput[]
    disconnect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    delete?: DishWhereUniqueInput | DishWhereUniqueInput[]
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    update?: DishUpdateWithWhereUniqueWithoutCategoryInput | DishUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DishUpdateManyWithWhereWithoutCategoryInput | DishUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DishScalarWhereInput | DishScalarWhereInput[]
  }

  export type DishUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DishCreateWithoutCategoryInput, DishUncheckedCreateWithoutCategoryInput> | DishCreateWithoutCategoryInput[] | DishUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DishCreateOrConnectWithoutCategoryInput | DishCreateOrConnectWithoutCategoryInput[]
    upsert?: DishUpsertWithWhereUniqueWithoutCategoryInput | DishUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DishCreateManyCategoryInputEnvelope
    set?: DishWhereUniqueInput | DishWhereUniqueInput[]
    disconnect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    delete?: DishWhereUniqueInput | DishWhereUniqueInput[]
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    update?: DishUpdateWithWhereUniqueWithoutCategoryInput | DishUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DishUpdateManyWithWhereWithoutCategoryInput | DishUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DishScalarWhereInput | DishScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutDishesInput = {
    create?: XOR<CategoryCreateWithoutDishesInput, CategoryUncheckedCreateWithoutDishesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDishesInput
    connect?: CategoryWhereUniqueInput
  }

  export type DishItemCreateNestedManyWithoutDishInput = {
    create?: XOR<DishItemCreateWithoutDishInput, DishItemUncheckedCreateWithoutDishInput> | DishItemCreateWithoutDishInput[] | DishItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishItemCreateOrConnectWithoutDishInput | DishItemCreateOrConnectWithoutDishInput[]
    createMany?: DishItemCreateManyDishInputEnvelope
    connect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutDishInput = {
    create?: XOR<OrderItemCreateWithoutDishInput, OrderItemUncheckedCreateWithoutDishInput> | OrderItemCreateWithoutDishInput[] | OrderItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutDishInput | OrderItemCreateOrConnectWithoutDishInput[]
    createMany?: OrderItemCreateManyDishInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DishItemUncheckedCreateNestedManyWithoutDishInput = {
    create?: XOR<DishItemCreateWithoutDishInput, DishItemUncheckedCreateWithoutDishInput> | DishItemCreateWithoutDishInput[] | DishItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishItemCreateOrConnectWithoutDishInput | DishItemCreateOrConnectWithoutDishInput[]
    createMany?: DishItemCreateManyDishInputEnvelope
    connect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutDishInput = {
    create?: XOR<OrderItemCreateWithoutDishInput, OrderItemUncheckedCreateWithoutDishInput> | OrderItemCreateWithoutDishInput[] | OrderItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutDishInput | OrderItemCreateOrConnectWithoutDishInput[]
    createMany?: OrderItemCreateManyDishInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoryUpdateOneRequiredWithoutDishesNestedInput = {
    create?: XOR<CategoryCreateWithoutDishesInput, CategoryUncheckedCreateWithoutDishesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDishesInput
    upsert?: CategoryUpsertWithoutDishesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDishesInput, CategoryUpdateWithoutDishesInput>, CategoryUncheckedUpdateWithoutDishesInput>
  }

  export type DishItemUpdateManyWithoutDishNestedInput = {
    create?: XOR<DishItemCreateWithoutDishInput, DishItemUncheckedCreateWithoutDishInput> | DishItemCreateWithoutDishInput[] | DishItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishItemCreateOrConnectWithoutDishInput | DishItemCreateOrConnectWithoutDishInput[]
    upsert?: DishItemUpsertWithWhereUniqueWithoutDishInput | DishItemUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: DishItemCreateManyDishInputEnvelope
    set?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    disconnect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    delete?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    connect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    update?: DishItemUpdateWithWhereUniqueWithoutDishInput | DishItemUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: DishItemUpdateManyWithWhereWithoutDishInput | DishItemUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: DishItemScalarWhereInput | DishItemScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutDishNestedInput = {
    create?: XOR<OrderItemCreateWithoutDishInput, OrderItemUncheckedCreateWithoutDishInput> | OrderItemCreateWithoutDishInput[] | OrderItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutDishInput | OrderItemCreateOrConnectWithoutDishInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutDishInput | OrderItemUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: OrderItemCreateManyDishInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutDishInput | OrderItemUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutDishInput | OrderItemUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type DishItemUncheckedUpdateManyWithoutDishNestedInput = {
    create?: XOR<DishItemCreateWithoutDishInput, DishItemUncheckedCreateWithoutDishInput> | DishItemCreateWithoutDishInput[] | DishItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishItemCreateOrConnectWithoutDishInput | DishItemCreateOrConnectWithoutDishInput[]
    upsert?: DishItemUpsertWithWhereUniqueWithoutDishInput | DishItemUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: DishItemCreateManyDishInputEnvelope
    set?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    disconnect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    delete?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    connect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    update?: DishItemUpdateWithWhereUniqueWithoutDishInput | DishItemUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: DishItemUpdateManyWithWhereWithoutDishInput | DishItemUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: DishItemScalarWhereInput | DishItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutDishNestedInput = {
    create?: XOR<OrderItemCreateWithoutDishInput, OrderItemUncheckedCreateWithoutDishInput> | OrderItemCreateWithoutDishInput[] | OrderItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutDishInput | OrderItemCreateOrConnectWithoutDishInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutDishInput | OrderItemUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: OrderItemCreateManyDishInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutDishInput | OrderItemUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutDishInput | OrderItemUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type DishCreateNestedOneWithoutDishItemsInput = {
    create?: XOR<DishCreateWithoutDishItemsInput, DishUncheckedCreateWithoutDishItemsInput>
    connectOrCreate?: DishCreateOrConnectWithoutDishItemsInput
    connect?: DishWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDishItemsInput = {
    create?: XOR<ProductCreateWithoutDishItemsInput, ProductUncheckedCreateWithoutDishItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDishItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type DishUpdateOneRequiredWithoutDishItemsNestedInput = {
    create?: XOR<DishCreateWithoutDishItemsInput, DishUncheckedCreateWithoutDishItemsInput>
    connectOrCreate?: DishCreateOrConnectWithoutDishItemsInput
    upsert?: DishUpsertWithoutDishItemsInput
    connect?: DishWhereUniqueInput
    update?: XOR<XOR<DishUpdateToOneWithWhereWithoutDishItemsInput, DishUpdateWithoutDishItemsInput>, DishUncheckedUpdateWithoutDishItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutDishItemsNestedInput = {
    create?: XOR<ProductCreateWithoutDishItemsInput, ProductUncheckedCreateWithoutDishItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDishItemsInput
    upsert?: ProductUpsertWithoutDishItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDishItemsInput, ProductUpdateWithoutDishItemsInput>, ProductUncheckedUpdateWithoutDishItemsInput>
  }

  export type DishItemCreateNestedManyWithoutProductInput = {
    create?: XOR<DishItemCreateWithoutProductInput, DishItemUncheckedCreateWithoutProductInput> | DishItemCreateWithoutProductInput[] | DishItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DishItemCreateOrConnectWithoutProductInput | DishItemCreateOrConnectWithoutProductInput[]
    createMany?: DishItemCreateManyProductInputEnvelope
    connect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutProductInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type DishItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DishItemCreateWithoutProductInput, DishItemUncheckedCreateWithoutProductInput> | DishItemCreateWithoutProductInput[] | DishItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DishItemCreateOrConnectWithoutProductInput | DishItemCreateOrConnectWithoutProductInput[]
    createMany?: DishItemCreateManyProductInputEnvelope
    connect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumunitFieldUpdateOperationsInput = {
    set?: $Enums.unit
  }

  export type DishItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<DishItemCreateWithoutProductInput, DishItemUncheckedCreateWithoutProductInput> | DishItemCreateWithoutProductInput[] | DishItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DishItemCreateOrConnectWithoutProductInput | DishItemCreateOrConnectWithoutProductInput[]
    upsert?: DishItemUpsertWithWhereUniqueWithoutProductInput | DishItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DishItemCreateManyProductInputEnvelope
    set?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    disconnect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    delete?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    connect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    update?: DishItemUpdateWithWhereUniqueWithoutProductInput | DishItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DishItemUpdateManyWithWhereWithoutProductInput | DishItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DishItemScalarWhereInput | DishItemScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutProductInput | StockMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutProductInput | StockMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutProductInput | StockMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type DishItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DishItemCreateWithoutProductInput, DishItemUncheckedCreateWithoutProductInput> | DishItemCreateWithoutProductInput[] | DishItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DishItemCreateOrConnectWithoutProductInput | DishItemCreateOrConnectWithoutProductInput[]
    upsert?: DishItemUpsertWithWhereUniqueWithoutProductInput | DishItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DishItemCreateManyProductInputEnvelope
    set?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    disconnect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    delete?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    connect?: DishItemWhereUniqueInput | DishItemWhereUniqueInput[]
    update?: DishItemUpdateWithWhereUniqueWithoutProductInput | DishItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DishItemUpdateManyWithWhereWithoutProductInput | DishItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DishItemScalarWhereInput | DishItemScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutProductInput | StockMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutProductInput | StockMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutProductInput | StockMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrdersInput
    connect?: TableWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput
    connect?: ClientWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutOrderInput = {
    create?: XOR<StockMovementCreateWithoutOrderInput, StockMovementUncheckedCreateWithoutOrderInput> | StockMovementCreateWithoutOrderInput[] | StockMovementUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutOrderInput | StockMovementCreateOrConnectWithoutOrderInput[]
    createMany?: StockMovementCreateManyOrderInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<StockMovementCreateWithoutOrderInput, StockMovementUncheckedCreateWithoutOrderInput> | StockMovementCreateWithoutOrderInput[] | StockMovementUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutOrderInput | StockMovementCreateOrConnectWithoutOrderInput[]
    createMany?: StockMovementCreateManyOrderInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type Enumorder_typeFieldUpdateOperationsInput = {
    set?: $Enums.order_type
  }

  export type Enumorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.order_status
  }

  export type TableUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrdersInput
    upsert?: TableUpsertWithoutOrdersInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutOrdersInput, TableUpdateWithoutOrdersInput>, TableUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput
    upsert?: ClientUpsertWithoutOrdersInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutOrdersInput, ClientUpdateWithoutOrdersInput>, ClientUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutOrderNestedInput = {
    create?: XOR<StockMovementCreateWithoutOrderInput, StockMovementUncheckedCreateWithoutOrderInput> | StockMovementCreateWithoutOrderInput[] | StockMovementUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutOrderInput | StockMovementCreateOrConnectWithoutOrderInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutOrderInput | StockMovementUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: StockMovementCreateManyOrderInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutOrderInput | StockMovementUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutOrderInput | StockMovementUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<StockMovementCreateWithoutOrderInput, StockMovementUncheckedCreateWithoutOrderInput> | StockMovementCreateWithoutOrderInput[] | StockMovementUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutOrderInput | StockMovementCreateOrConnectWithoutOrderInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutOrderInput | StockMovementUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: StockMovementCreateManyOrderInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutOrderInput | StockMovementUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutOrderInput | StockMovementUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type DishCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<DishCreateWithoutOrderItemsInput, DishUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: DishCreateOrConnectWithoutOrderItemsInput
    connect?: DishWhereUniqueInput
  }

  export type BillItemCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<BillItemCreateWithoutOrderItemInput, BillItemUncheckedCreateWithoutOrderItemInput> | BillItemCreateWithoutOrderItemInput[] | BillItemUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutOrderItemInput | BillItemCreateOrConnectWithoutOrderItemInput[]
    createMany?: BillItemCreateManyOrderItemInputEnvelope
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
  }

  export type BillItemUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<BillItemCreateWithoutOrderItemInput, BillItemUncheckedCreateWithoutOrderItemInput> | BillItemCreateWithoutOrderItemInput[] | BillItemUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutOrderItemInput | BillItemCreateOrConnectWithoutOrderItemInput[]
    createMany?: BillItemCreateManyOrderItemInputEnvelope
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type DishUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<DishCreateWithoutOrderItemsInput, DishUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: DishCreateOrConnectWithoutOrderItemsInput
    upsert?: DishUpsertWithoutOrderItemsInput
    connect?: DishWhereUniqueInput
    update?: XOR<XOR<DishUpdateToOneWithWhereWithoutOrderItemsInput, DishUpdateWithoutOrderItemsInput>, DishUncheckedUpdateWithoutOrderItemsInput>
  }

  export type BillItemUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<BillItemCreateWithoutOrderItemInput, BillItemUncheckedCreateWithoutOrderItemInput> | BillItemCreateWithoutOrderItemInput[] | BillItemUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutOrderItemInput | BillItemCreateOrConnectWithoutOrderItemInput[]
    upsert?: BillItemUpsertWithWhereUniqueWithoutOrderItemInput | BillItemUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: BillItemCreateManyOrderItemInputEnvelope
    set?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    disconnect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    delete?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    update?: BillItemUpdateWithWhereUniqueWithoutOrderItemInput | BillItemUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: BillItemUpdateManyWithWhereWithoutOrderItemInput | BillItemUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
  }

  export type BillItemUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<BillItemCreateWithoutOrderItemInput, BillItemUncheckedCreateWithoutOrderItemInput> | BillItemCreateWithoutOrderItemInput[] | BillItemUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutOrderItemInput | BillItemCreateOrConnectWithoutOrderItemInput[]
    upsert?: BillItemUpsertWithWhereUniqueWithoutOrderItemInput | BillItemUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: BillItemCreateManyOrderItemInputEnvelope
    set?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    disconnect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    delete?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    update?: BillItemUpdateWithWhereUniqueWithoutOrderItemInput | BillItemUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: BillItemUpdateManyWithWhereWithoutOrderItemInput | BillItemUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutBillsInput = {
    create?: XOR<TableCreateWithoutBillsInput, TableUncheckedCreateWithoutBillsInput>
    connectOrCreate?: TableCreateOrConnectWithoutBillsInput
    connect?: TableWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutBillsInput = {
    create?: XOR<ClientCreateWithoutBillsInput, ClientUncheckedCreateWithoutBillsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBillsInput
    connect?: ClientWhereUniqueInput
  }

  export type BillItemCreateNestedManyWithoutBillInput = {
    create?: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput> | BillItemCreateWithoutBillInput[] | BillItemUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutBillInput | BillItemCreateOrConnectWithoutBillInput[]
    createMany?: BillItemCreateManyBillInputEnvelope
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutBillInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BillItemUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput> | BillItemCreateWithoutBillInput[] | BillItemUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutBillInput | BillItemCreateOrConnectWithoutBillInput[]
    createMany?: BillItemCreateManyBillInputEnvelope
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type Enumbill_statusFieldUpdateOperationsInput = {
    set?: $Enums.bill_status
  }

  export type TableUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<TableCreateWithoutBillsInput, TableUncheckedCreateWithoutBillsInput>
    connectOrCreate?: TableCreateOrConnectWithoutBillsInput
    upsert?: TableUpsertWithoutBillsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutBillsInput, TableUpdateWithoutBillsInput>, TableUncheckedUpdateWithoutBillsInput>
  }

  export type ClientUpdateOneWithoutBillsNestedInput = {
    create?: XOR<ClientCreateWithoutBillsInput, ClientUncheckedCreateWithoutBillsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBillsInput
    upsert?: ClientUpsertWithoutBillsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutBillsInput, ClientUpdateWithoutBillsInput>, ClientUncheckedUpdateWithoutBillsInput>
  }

  export type BillItemUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput> | BillItemCreateWithoutBillInput[] | BillItemUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutBillInput | BillItemCreateOrConnectWithoutBillInput[]
    upsert?: BillItemUpsertWithWhereUniqueWithoutBillInput | BillItemUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillItemCreateManyBillInputEnvelope
    set?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    disconnect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    delete?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    update?: BillItemUpdateWithWhereUniqueWithoutBillInput | BillItemUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillItemUpdateManyWithWhereWithoutBillInput | BillItemUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutBillNestedInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBillInput | PaymentUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBillInput | PaymentUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBillInput | PaymentUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BillItemUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput> | BillItemCreateWithoutBillInput[] | BillItemUncheckedCreateWithoutBillInput[]
    connectOrCreate?: BillItemCreateOrConnectWithoutBillInput | BillItemCreateOrConnectWithoutBillInput[]
    upsert?: BillItemUpsertWithWhereUniqueWithoutBillInput | BillItemUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: BillItemCreateManyBillInputEnvelope
    set?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    disconnect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    delete?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    connect?: BillItemWhereUniqueInput | BillItemWhereUniqueInput[]
    update?: BillItemUpdateWithWhereUniqueWithoutBillInput | BillItemUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: BillItemUpdateManyWithWhereWithoutBillInput | BillItemUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput> | PaymentCreateWithoutBillInput[] | PaymentUncheckedCreateWithoutBillInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBillInput | PaymentCreateOrConnectWithoutBillInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBillInput | PaymentUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: PaymentCreateManyBillInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBillInput | PaymentUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBillInput | PaymentUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BillCreateNestedOneWithoutBillItemsInput = {
    create?: XOR<BillCreateWithoutBillItemsInput, BillUncheckedCreateWithoutBillItemsInput>
    connectOrCreate?: BillCreateOrConnectWithoutBillItemsInput
    connect?: BillWhereUniqueInput
  }

  export type OrderItemCreateNestedOneWithoutBillItemsInput = {
    create?: XOR<OrderItemCreateWithoutBillItemsInput, OrderItemUncheckedCreateWithoutBillItemsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutBillItemsInput
    connect?: OrderItemWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutBillItemsNestedInput = {
    create?: XOR<BillCreateWithoutBillItemsInput, BillUncheckedCreateWithoutBillItemsInput>
    connectOrCreate?: BillCreateOrConnectWithoutBillItemsInput
    upsert?: BillUpsertWithoutBillItemsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutBillItemsInput, BillUpdateWithoutBillItemsInput>, BillUncheckedUpdateWithoutBillItemsInput>
  }

  export type OrderItemUpdateOneRequiredWithoutBillItemsNestedInput = {
    create?: XOR<OrderItemCreateWithoutBillItemsInput, OrderItemUncheckedCreateWithoutBillItemsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutBillItemsInput
    upsert?: OrderItemUpsertWithoutBillItemsInput
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutBillItemsInput, OrderItemUpdateWithoutBillItemsInput>, OrderItemUncheckedUpdateWithoutBillItemsInput>
  }

  export type BillCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BillCreateOrConnectWithoutPaymentsInput
    connect?: BillWhereUniqueInput
  }

  export type Enumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method
  }

  export type Enumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status
  }

  export type BillUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BillCreateOrConnectWithoutPaymentsInput
    upsert?: BillUpsertWithoutPaymentsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutPaymentsInput, BillUpdateWithoutPaymentsInput>, BillUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProductCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockMovementsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<OrderCreateWithoutStockMovementsInput, OrderUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutStockMovementsInput
    connect?: OrderWhereUniqueInput
  }

  export type Enummovement_typeFieldUpdateOperationsInput = {
    set?: $Enums.movement_type
  }

  export type Enumreference_typeFieldUpdateOperationsInput = {
    set?: $Enums.reference_type
  }

  export type ProductUpdateOneRequiredWithoutStockMovementsNestedInput = {
    create?: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockMovementsInput
    upsert?: ProductUpsertWithoutStockMovementsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockMovementsInput, ProductUpdateWithoutStockMovementsInput>, ProductUncheckedUpdateWithoutStockMovementsInput>
  }

  export type OrderUpdateOneWithoutStockMovementsNestedInput = {
    create?: XOR<OrderCreateWithoutStockMovementsInput, OrderUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutStockMovementsInput
    upsert?: OrderUpsertWithoutStockMovementsInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutStockMovementsInput, OrderUpdateWithoutStockMovementsInput>, OrderUncheckedUpdateWithoutStockMovementsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumunitFilter<$PrismaModel = never> = {
    equals?: $Enums.unit | EnumunitFieldRefInput<$PrismaModel>
    in?: $Enums.unit[] | ListEnumunitFieldRefInput<$PrismaModel>
    notIn?: $Enums.unit[] | ListEnumunitFieldRefInput<$PrismaModel>
    not?: NestedEnumunitFilter<$PrismaModel> | $Enums.unit
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumunitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.unit | EnumunitFieldRefInput<$PrismaModel>
    in?: $Enums.unit[] | ListEnumunitFieldRefInput<$PrismaModel>
    notIn?: $Enums.unit[] | ListEnumunitFieldRefInput<$PrismaModel>
    not?: NestedEnumunitWithAggregatesFilter<$PrismaModel> | $Enums.unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumunitFilter<$PrismaModel>
    _max?: NestedEnumunitFilter<$PrismaModel>
  }

  export type NestedEnumorder_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.order_type | Enumorder_typeFieldRefInput<$PrismaModel>
    in?: $Enums.order_type[] | ListEnumorder_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_type[] | ListEnumorder_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_typeFilter<$PrismaModel> | $Enums.order_type
  }

  export type NestedEnumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type NestedEnumorder_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_type | Enumorder_typeFieldRefInput<$PrismaModel>
    in?: $Enums.order_type[] | ListEnumorder_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_type[] | ListEnumorder_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_typeWithAggregatesFilter<$PrismaModel> | $Enums.order_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_typeFilter<$PrismaModel>
    _max?: NestedEnumorder_typeFilter<$PrismaModel>
  }

  export type NestedEnumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.order_status[] | ListEnumorder_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type NestedEnumbill_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.bill_status | Enumbill_statusFieldRefInput<$PrismaModel>
    in?: $Enums.bill_status[] | ListEnumbill_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.bill_status[] | ListEnumbill_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbill_statusFilter<$PrismaModel> | $Enums.bill_status
  }

  export type NestedEnumbill_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bill_status | Enumbill_statusFieldRefInput<$PrismaModel>
    in?: $Enums.bill_status[] | ListEnumbill_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.bill_status[] | ListEnumbill_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumbill_statusWithAggregatesFilter<$PrismaModel> | $Enums.bill_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbill_statusFilter<$PrismaModel>
    _max?: NestedEnumbill_statusFilter<$PrismaModel>
  }

  export type NestedEnumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type NestedEnumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_status[] | ListEnumpayment_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type NestedEnummovement_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.movement_type | Enummovement_typeFieldRefInput<$PrismaModel>
    in?: $Enums.movement_type[] | ListEnummovement_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.movement_type[] | ListEnummovement_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummovement_typeFilter<$PrismaModel> | $Enums.movement_type
  }

  export type NestedEnumreference_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.reference_type | Enumreference_typeFieldRefInput<$PrismaModel>
    in?: $Enums.reference_type[] | ListEnumreference_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.reference_type[] | ListEnumreference_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumreference_typeFilter<$PrismaModel> | $Enums.reference_type
  }

  export type NestedEnummovement_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movement_type | Enummovement_typeFieldRefInput<$PrismaModel>
    in?: $Enums.movement_type[] | ListEnummovement_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.movement_type[] | ListEnummovement_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummovement_typeWithAggregatesFilter<$PrismaModel> | $Enums.movement_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummovement_typeFilter<$PrismaModel>
    _max?: NestedEnummovement_typeFilter<$PrismaModel>
  }

  export type NestedEnumreference_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reference_type | Enumreference_typeFieldRefInput<$PrismaModel>
    in?: $Enums.reference_type[] | ListEnumreference_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.reference_type[] | ListEnumreference_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumreference_typeWithAggregatesFilter<$PrismaModel> | $Enums.reference_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreference_typeFilter<$PrismaModel>
    _max?: NestedEnumreference_typeFilter<$PrismaModel>
  }

  export type OrderCreateWithoutClientInput = {
    id?: string
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TableCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    stockMovements?: StockMovementCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutClientInput = {
    id?: string
    tableId?: string | null
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutClientInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderCreateManyClientInputEnvelope = {
    data: OrderCreateManyClientInput | OrderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutClientInput = {
    id?: string
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutBillsInput
    billItems?: BillItemCreateNestedManyWithoutBillInput
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutClientInput = {
    id?: string
    tableId: string
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    billItems?: BillItemUncheckedCreateNestedManyWithoutBillInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutClientInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput>
  }

  export type BillCreateManyClientInputEnvelope = {
    data: BillCreateManyClientInput | BillCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
  }

  export type OrderUpdateManyWithWhereWithoutClientInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutClientInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    tableId?: StringNullableFilter<"Order"> | string | null
    clientId?: StringNullableFilter<"Order"> | string | null
    orderType?: Enumorder_typeFilter<"Order"> | $Enums.order_type
    status?: Enumorder_statusFilter<"Order"> | $Enums.order_status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type BillUpsertWithWhereUniqueWithoutClientInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutClientInput, BillUncheckedUpdateWithoutClientInput>
    create: XOR<BillCreateWithoutClientInput, BillUncheckedCreateWithoutClientInput>
  }

  export type BillUpdateWithWhereUniqueWithoutClientInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutClientInput, BillUncheckedUpdateWithoutClientInput>
  }

  export type BillUpdateManyWithWhereWithoutClientInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutClientInput>
  }

  export type BillScalarWhereInput = {
    AND?: BillScalarWhereInput | BillScalarWhereInput[]
    OR?: BillScalarWhereInput[]
    NOT?: BillScalarWhereInput | BillScalarWhereInput[]
    id?: StringFilter<"Bill"> | string
    tableId?: StringFilter<"Bill"> | string
    clientId?: StringNullableFilter<"Bill"> | string | null
    status?: Enumbill_statusFilter<"Bill"> | $Enums.bill_status
    total?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
  }

  export type OrderCreateWithoutTableInput = {
    id?: string
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    stockMovements?: StockMovementCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTableInput = {
    id?: string
    clientId?: string | null
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTableInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderCreateManyTableInputEnvelope = {
    data: OrderCreateManyTableInput | OrderCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutTableInput = {
    id?: string
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutBillsInput
    billItems?: BillItemCreateNestedManyWithoutBillInput
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutTableInput = {
    id?: string
    clientId?: string | null
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    billItems?: BillItemUncheckedCreateNestedManyWithoutBillInput
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutTableInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutTableInput, BillUncheckedCreateWithoutTableInput>
  }

  export type BillCreateManyTableInputEnvelope = {
    data: BillCreateManyTableInput | BillCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
  }

  export type OrderUpdateManyWithWhereWithoutTableInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTableInput>
  }

  export type BillUpsertWithWhereUniqueWithoutTableInput = {
    where: BillWhereUniqueInput
    update: XOR<BillUpdateWithoutTableInput, BillUncheckedUpdateWithoutTableInput>
    create: XOR<BillCreateWithoutTableInput, BillUncheckedCreateWithoutTableInput>
  }

  export type BillUpdateWithWhereUniqueWithoutTableInput = {
    where: BillWhereUniqueInput
    data: XOR<BillUpdateWithoutTableInput, BillUncheckedUpdateWithoutTableInput>
  }

  export type BillUpdateManyWithWhereWithoutTableInput = {
    where: BillScalarWhereInput
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyWithoutTableInput>
  }

  export type DishCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishItems?: DishItemCreateNestedManyWithoutDishInput
    orderItems?: OrderItemCreateNestedManyWithoutDishInput
  }

  export type DishUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishItems?: DishItemUncheckedCreateNestedManyWithoutDishInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishCreateOrConnectWithoutCategoryInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutCategoryInput, DishUncheckedCreateWithoutCategoryInput>
  }

  export type DishCreateManyCategoryInputEnvelope = {
    data: DishCreateManyCategoryInput | DishCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type DishUpsertWithWhereUniqueWithoutCategoryInput = {
    where: DishWhereUniqueInput
    update: XOR<DishUpdateWithoutCategoryInput, DishUncheckedUpdateWithoutCategoryInput>
    create: XOR<DishCreateWithoutCategoryInput, DishUncheckedCreateWithoutCategoryInput>
  }

  export type DishUpdateWithWhereUniqueWithoutCategoryInput = {
    where: DishWhereUniqueInput
    data: XOR<DishUpdateWithoutCategoryInput, DishUncheckedUpdateWithoutCategoryInput>
  }

  export type DishUpdateManyWithWhereWithoutCategoryInput = {
    where: DishScalarWhereInput
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyWithoutCategoryInput>
  }

  export type DishScalarWhereInput = {
    AND?: DishScalarWhereInput | DishScalarWhereInput[]
    OR?: DishScalarWhereInput[]
    NOT?: DishScalarWhereInput | DishScalarWhereInput[]
    id?: StringFilter<"Dish"> | string
    name?: StringFilter<"Dish"> | string
    description?: StringNullableFilter<"Dish"> | string | null
    price?: DecimalFilter<"Dish"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"Dish"> | Decimal | DecimalJsLike | number | string
    categoryId?: StringFilter<"Dish"> | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
  }

  export type CategoryCreateWithoutDishesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutDishesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutDishesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDishesInput, CategoryUncheckedCreateWithoutDishesInput>
  }

  export type DishItemCreateWithoutDishInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutDishItemsInput
  }

  export type DishItemUncheckedCreateWithoutDishInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishItemCreateOrConnectWithoutDishInput = {
    where: DishItemWhereUniqueInput
    create: XOR<DishItemCreateWithoutDishInput, DishItemUncheckedCreateWithoutDishInput>
  }

  export type DishItemCreateManyDishInputEnvelope = {
    data: DishItemCreateManyDishInput | DishItemCreateManyDishInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutDishInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    billItems?: BillItemCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutDishInput = {
    id?: string
    orderId: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    billItems?: BillItemUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutDishInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutDishInput, OrderItemUncheckedCreateWithoutDishInput>
  }

  export type OrderItemCreateManyDishInputEnvelope = {
    data: OrderItemCreateManyDishInput | OrderItemCreateManyDishInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutDishesInput = {
    update: XOR<CategoryUpdateWithoutDishesInput, CategoryUncheckedUpdateWithoutDishesInput>
    create: XOR<CategoryCreateWithoutDishesInput, CategoryUncheckedCreateWithoutDishesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutDishesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutDishesInput, CategoryUncheckedUpdateWithoutDishesInput>
  }

  export type CategoryUpdateWithoutDishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutDishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishItemUpsertWithWhereUniqueWithoutDishInput = {
    where: DishItemWhereUniqueInput
    update: XOR<DishItemUpdateWithoutDishInput, DishItemUncheckedUpdateWithoutDishInput>
    create: XOR<DishItemCreateWithoutDishInput, DishItemUncheckedCreateWithoutDishInput>
  }

  export type DishItemUpdateWithWhereUniqueWithoutDishInput = {
    where: DishItemWhereUniqueInput
    data: XOR<DishItemUpdateWithoutDishInput, DishItemUncheckedUpdateWithoutDishInput>
  }

  export type DishItemUpdateManyWithWhereWithoutDishInput = {
    where: DishItemScalarWhereInput
    data: XOR<DishItemUpdateManyMutationInput, DishItemUncheckedUpdateManyWithoutDishInput>
  }

  export type DishItemScalarWhereInput = {
    AND?: DishItemScalarWhereInput | DishItemScalarWhereInput[]
    OR?: DishItemScalarWhereInput[]
    NOT?: DishItemScalarWhereInput | DishItemScalarWhereInput[]
    id?: StringFilter<"DishItem"> | string
    dishId?: StringFilter<"DishItem"> | string
    productId?: StringFilter<"DishItem"> | string
    quantity?: DecimalFilter<"DishItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DishItem"> | Date | string
    updatedAt?: DateTimeFilter<"DishItem"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutDishInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutDishInput, OrderItemUncheckedUpdateWithoutDishInput>
    create: XOR<OrderItemCreateWithoutDishInput, OrderItemUncheckedCreateWithoutDishInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutDishInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutDishInput, OrderItemUncheckedUpdateWithoutDishInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutDishInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutDishInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    dishId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type DishCreateWithoutDishItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutDishesInput
    orderItems?: OrderItemCreateNestedManyWithoutDishInput
  }

  export type DishUncheckedCreateWithoutDishItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishCreateOrConnectWithoutDishItemsInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutDishItemsInput, DishUncheckedCreateWithoutDishItemsInput>
  }

  export type ProductCreateWithoutDishItemsInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    minimumQuantity?: Decimal | DecimalJsLike | number | string | null
    unit?: $Enums.unit
    price: Decimal | DecimalJsLike | number | string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDishItemsInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    minimumQuantity?: Decimal | DecimalJsLike | number | string | null
    unit?: $Enums.unit
    price: Decimal | DecimalJsLike | number | string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDishItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDishItemsInput, ProductUncheckedCreateWithoutDishItemsInput>
  }

  export type DishUpsertWithoutDishItemsInput = {
    update: XOR<DishUpdateWithoutDishItemsInput, DishUncheckedUpdateWithoutDishItemsInput>
    create: XOR<DishCreateWithoutDishItemsInput, DishUncheckedCreateWithoutDishItemsInput>
    where?: DishWhereInput
  }

  export type DishUpdateToOneWithWhereWithoutDishItemsInput = {
    where?: DishWhereInput
    data: XOR<DishUpdateWithoutDishItemsInput, DishUncheckedUpdateWithoutDishItemsInput>
  }

  export type DishUpdateWithoutDishItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutDishesNestedInput
    orderItems?: OrderItemUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateWithoutDishItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutDishNestedInput
  }

  export type ProductUpsertWithoutDishItemsInput = {
    update: XOR<ProductUpdateWithoutDishItemsInput, ProductUncheckedUpdateWithoutDishItemsInput>
    create: XOR<ProductCreateWithoutDishItemsInput, ProductUncheckedCreateWithoutDishItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDishItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDishItemsInput, ProductUncheckedUpdateWithoutDishItemsInput>
  }

  export type ProductUpdateWithoutDishItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumQuantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFieldUpdateOperationsInput | $Enums.unit
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDishItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumQuantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFieldUpdateOperationsInput | $Enums.unit
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type DishItemCreateWithoutProductInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dish: DishCreateNestedOneWithoutDishItemsInput
  }

  export type DishItemUncheckedCreateWithoutProductInput = {
    id?: string
    dishId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishItemCreateOrConnectWithoutProductInput = {
    where: DishItemWhereUniqueInput
    create: XOR<DishItemCreateWithoutProductInput, DishItemUncheckedCreateWithoutProductInput>
  }

  export type DishItemCreateManyProductInputEnvelope = {
    data: DishItemCreateManyProductInput | DishItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutProductInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
    order?: OrderCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutProductInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceId?: string | null
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput>
  }

  export type StockMovementCreateManyProductInputEnvelope = {
    data: StockMovementCreateManyProductInput | StockMovementCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DishItemUpsertWithWhereUniqueWithoutProductInput = {
    where: DishItemWhereUniqueInput
    update: XOR<DishItemUpdateWithoutProductInput, DishItemUncheckedUpdateWithoutProductInput>
    create: XOR<DishItemCreateWithoutProductInput, DishItemUncheckedCreateWithoutProductInput>
  }

  export type DishItemUpdateWithWhereUniqueWithoutProductInput = {
    where: DishItemWhereUniqueInput
    data: XOR<DishItemUpdateWithoutProductInput, DishItemUncheckedUpdateWithoutProductInput>
  }

  export type DishItemUpdateManyWithWhereWithoutProductInput = {
    where: DishItemScalarWhereInput
    data: XOR<DishItemUpdateManyMutationInput, DishItemUncheckedUpdateManyWithoutProductInput>
  }

  export type StockMovementUpsertWithWhereUniqueWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutProductInput, StockMovementUncheckedUpdateWithoutProductInput>
    create: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutProductInput, StockMovementUncheckedUpdateWithoutProductInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutProductInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutProductInput>
  }

  export type StockMovementScalarWhereInput = {
    AND?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    OR?: StockMovementScalarWhereInput[]
    NOT?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    productId?: StringFilter<"StockMovement"> | string
    quantity?: DecimalFilter<"StockMovement"> | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFilter<"StockMovement"> | $Enums.movement_type
    referenceId?: StringNullableFilter<"StockMovement"> | string | null
    referenceType?: Enumreference_typeFilter<"StockMovement"> | $Enums.reference_type
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
  }

  export type TableCreateWithoutOrdersInput = {
    id?: string
    number: number
    qrcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bills?: BillCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutOrdersInput = {
    id?: string
    number: number
    qrcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bills?: BillUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutOrdersInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
  }

  export type ClientCreateWithoutOrdersInput = {
    id?: string
    name?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bills?: BillCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutOrdersInput = {
    id?: string
    name?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bills?: BillUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutOrdersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dish: DishCreateNestedOneWithoutOrderItemsInput
    billItems?: BillItemCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    dishId: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    billItems?: BillItemUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutOrderInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutOrderInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutOrderInput, StockMovementUncheckedCreateWithoutOrderInput>
  }

  export type StockMovementCreateManyOrderInputEnvelope = {
    data: StockMovementCreateManyOrderInput | StockMovementCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutOrdersInput = {
    update: XOR<TableUpdateWithoutOrdersInput, TableUncheckedUpdateWithoutOrdersInput>
    create: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutOrdersInput, TableUncheckedUpdateWithoutOrdersInput>
  }

  export type TableUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    qrcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    qrcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUncheckedUpdateManyWithoutTableNestedInput
  }

  export type ClientUpsertWithoutOrdersInput = {
    update: XOR<ClientUpdateWithoutOrdersInput, ClientUncheckedUpdateWithoutOrdersInput>
    create: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutOrdersInput, ClientUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bills?: BillUncheckedUpdateManyWithoutClientNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type StockMovementUpsertWithWhereUniqueWithoutOrderInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutOrderInput, StockMovementUncheckedUpdateWithoutOrderInput>
    create: XOR<StockMovementCreateWithoutOrderInput, StockMovementUncheckedCreateWithoutOrderInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutOrderInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutOrderInput, StockMovementUncheckedUpdateWithoutOrderInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutOrderInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TableCreateNestedOneWithoutOrdersInput
    client?: ClientCreateNestedOneWithoutOrdersInput
    stockMovements?: StockMovementCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    tableId?: string | null
    clientId?: string | null
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type DishCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutDishesInput
    dishItems?: DishItemCreateNestedManyWithoutDishInput
  }

  export type DishUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishItems?: DishItemUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishCreateOrConnectWithoutOrderItemsInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutOrderItemsInput, DishUncheckedCreateWithoutOrderItemsInput>
  }

  export type BillItemCreateWithoutOrderItemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bill: BillCreateNestedOneWithoutBillItemsInput
  }

  export type BillItemUncheckedCreateWithoutOrderItemInput = {
    id?: string
    billId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillItemCreateOrConnectWithoutOrderItemInput = {
    where: BillItemWhereUniqueInput
    create: XOR<BillItemCreateWithoutOrderItemInput, BillItemUncheckedCreateWithoutOrderItemInput>
  }

  export type BillItemCreateManyOrderItemInputEnvelope = {
    data: BillItemCreateManyOrderItemInput | BillItemCreateManyOrderItemInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutOrdersNestedInput
    client?: ClientUpdateOneWithoutOrdersNestedInput
    stockMovements?: StockMovementUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type DishUpsertWithoutOrderItemsInput = {
    update: XOR<DishUpdateWithoutOrderItemsInput, DishUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<DishCreateWithoutOrderItemsInput, DishUncheckedCreateWithoutOrderItemsInput>
    where?: DishWhereInput
  }

  export type DishUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: DishWhereInput
    data: XOR<DishUpdateWithoutOrderItemsInput, DishUncheckedUpdateWithoutOrderItemsInput>
  }

  export type DishUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutDishesNestedInput
    dishItems?: DishItemUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishItems?: DishItemUncheckedUpdateManyWithoutDishNestedInput
  }

  export type BillItemUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: BillItemWhereUniqueInput
    update: XOR<BillItemUpdateWithoutOrderItemInput, BillItemUncheckedUpdateWithoutOrderItemInput>
    create: XOR<BillItemCreateWithoutOrderItemInput, BillItemUncheckedCreateWithoutOrderItemInput>
  }

  export type BillItemUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: BillItemWhereUniqueInput
    data: XOR<BillItemUpdateWithoutOrderItemInput, BillItemUncheckedUpdateWithoutOrderItemInput>
  }

  export type BillItemUpdateManyWithWhereWithoutOrderItemInput = {
    where: BillItemScalarWhereInput
    data: XOR<BillItemUpdateManyMutationInput, BillItemUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type BillItemScalarWhereInput = {
    AND?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
    OR?: BillItemScalarWhereInput[]
    NOT?: BillItemScalarWhereInput | BillItemScalarWhereInput[]
    id?: StringFilter<"BillItem"> | string
    billId?: StringFilter<"BillItem"> | string
    orderId?: StringFilter<"BillItem"> | string
    createdAt?: DateTimeFilter<"BillItem"> | Date | string
    updatedAt?: DateTimeFilter<"BillItem"> | Date | string
  }

  export type TableCreateWithoutBillsInput = {
    id?: string
    number: number
    qrcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutBillsInput = {
    id?: string
    number: number
    qrcode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutBillsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutBillsInput, TableUncheckedCreateWithoutBillsInput>
  }

  export type ClientCreateWithoutBillsInput = {
    id?: string
    name?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutBillsInput = {
    id?: string
    name?: string | null
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutBillsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBillsInput, ClientUncheckedCreateWithoutBillsInput>
  }

  export type BillItemCreateWithoutBillInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItem: OrderItemCreateNestedOneWithoutBillItemsInput
  }

  export type BillItemUncheckedCreateWithoutBillInput = {
    id?: string
    orderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillItemCreateOrConnectWithoutBillInput = {
    where: BillItemWhereUniqueInput
    create: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput>
  }

  export type BillItemCreateManyBillInputEnvelope = {
    data: BillItemCreateManyBillInput | BillItemCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutBillInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.payment_method
    status?: $Enums.payment_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBillInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.payment_method
    status?: $Enums.payment_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBillInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput>
  }

  export type PaymentCreateManyBillInputEnvelope = {
    data: PaymentCreateManyBillInput | PaymentCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutBillsInput = {
    update: XOR<TableUpdateWithoutBillsInput, TableUncheckedUpdateWithoutBillsInput>
    create: XOR<TableCreateWithoutBillsInput, TableUncheckedCreateWithoutBillsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutBillsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutBillsInput, TableUncheckedUpdateWithoutBillsInput>
  }

  export type TableUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    qrcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    qrcode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
  }

  export type ClientUpsertWithoutBillsInput = {
    update: XOR<ClientUpdateWithoutBillsInput, ClientUncheckedUpdateWithoutBillsInput>
    create: XOR<ClientCreateWithoutBillsInput, ClientUncheckedCreateWithoutBillsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutBillsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutBillsInput, ClientUncheckedUpdateWithoutBillsInput>
  }

  export type ClientUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type BillItemUpsertWithWhereUniqueWithoutBillInput = {
    where: BillItemWhereUniqueInput
    update: XOR<BillItemUpdateWithoutBillInput, BillItemUncheckedUpdateWithoutBillInput>
    create: XOR<BillItemCreateWithoutBillInput, BillItemUncheckedCreateWithoutBillInput>
  }

  export type BillItemUpdateWithWhereUniqueWithoutBillInput = {
    where: BillItemWhereUniqueInput
    data: XOR<BillItemUpdateWithoutBillInput, BillItemUncheckedUpdateWithoutBillInput>
  }

  export type BillItemUpdateManyWithWhereWithoutBillInput = {
    where: BillItemScalarWhereInput
    data: XOR<BillItemUpdateManyMutationInput, BillItemUncheckedUpdateManyWithoutBillInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutBillInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBillInput, PaymentUncheckedUpdateWithoutBillInput>
    create: XOR<PaymentCreateWithoutBillInput, PaymentUncheckedCreateWithoutBillInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBillInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBillInput, PaymentUncheckedUpdateWithoutBillInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBillInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBillInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    billId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFilter<"Payment"> | $Enums.payment_method
    status?: Enumpayment_statusFilter<"Payment"> | $Enums.payment_status
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type BillCreateWithoutBillItemsInput = {
    id?: string
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutBillsInput
    client?: ClientCreateNestedOneWithoutBillsInput
    payments?: PaymentCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutBillItemsInput = {
    id?: string
    tableId: string
    clientId?: string | null
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutBillItemsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutBillItemsInput, BillUncheckedCreateWithoutBillItemsInput>
  }

  export type OrderItemCreateWithoutBillItemsInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    dish: DishCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutBillItemsInput = {
    id?: string
    orderId: string
    dishId: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutBillItemsInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutBillItemsInput, OrderItemUncheckedCreateWithoutBillItemsInput>
  }

  export type BillUpsertWithoutBillItemsInput = {
    update: XOR<BillUpdateWithoutBillItemsInput, BillUncheckedUpdateWithoutBillItemsInput>
    create: XOR<BillCreateWithoutBillItemsInput, BillUncheckedCreateWithoutBillItemsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutBillItemsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutBillItemsInput, BillUncheckedUpdateWithoutBillItemsInput>
  }

  export type BillUpdateWithoutBillItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutBillsNestedInput
    client?: ClientUpdateOneWithoutBillsNestedInput
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutBillItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type OrderItemUpsertWithoutBillItemsInput = {
    update: XOR<OrderItemUpdateWithoutBillItemsInput, OrderItemUncheckedUpdateWithoutBillItemsInput>
    create: XOR<OrderItemCreateWithoutBillItemsInput, OrderItemUncheckedCreateWithoutBillItemsInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutBillItemsInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutBillItemsInput, OrderItemUncheckedUpdateWithoutBillItemsInput>
  }

  export type OrderItemUpdateWithoutBillItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    dish?: DishUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutBillItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillCreateWithoutPaymentsInput = {
    id?: string
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutBillsInput
    client?: ClientCreateNestedOneWithoutBillsInput
    billItems?: BillItemCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tableId: string
    clientId?: string | null
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    billItems?: BillItemUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutPaymentsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
  }

  export type BillUpsertWithoutPaymentsInput = {
    update: XOR<BillUpdateWithoutPaymentsInput, BillUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BillCreateWithoutPaymentsInput, BillUncheckedCreateWithoutPaymentsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutPaymentsInput, BillUncheckedUpdateWithoutPaymentsInput>
  }

  export type BillUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutBillsNestedInput
    client?: ClientUpdateOneWithoutBillsNestedInput
    billItems?: BillItemUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billItems?: BillItemUncheckedUpdateManyWithoutBillNestedInput
  }

  export type ProductCreateWithoutStockMovementsInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    minimumQuantity?: Decimal | DecimalJsLike | number | string | null
    unit?: $Enums.unit
    price: Decimal | DecimalJsLike | number | string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dishItems?: DishItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockMovementsInput = {
    id?: string
    name: string
    quantity: Decimal | DecimalJsLike | number | string
    minimumQuantity?: Decimal | DecimalJsLike | number | string | null
    unit?: $Enums.unit
    price: Decimal | DecimalJsLike | number | string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dishItems?: DishItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockMovementsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
  }

  export type OrderCreateWithoutStockMovementsInput = {
    id?: string
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TableCreateNestedOneWithoutOrdersInput
    client?: ClientCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutStockMovementsInput = {
    id?: string
    tableId?: string | null
    clientId?: string | null
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutStockMovementsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStockMovementsInput, OrderUncheckedCreateWithoutStockMovementsInput>
  }

  export type ProductUpsertWithoutStockMovementsInput = {
    update: XOR<ProductUpdateWithoutStockMovementsInput, ProductUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockMovementsInput, ProductUncheckedUpdateWithoutStockMovementsInput>
  }

  export type ProductUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumQuantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFieldUpdateOperationsInput | $Enums.unit
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishItems?: DishItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minimumQuantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: EnumunitFieldUpdateOperationsInput | $Enums.unit
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishItems?: DishItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderUpsertWithoutStockMovementsInput = {
    update: XOR<OrderUpdateWithoutStockMovementsInput, OrderUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<OrderCreateWithoutStockMovementsInput, OrderUncheckedCreateWithoutStockMovementsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutStockMovementsInput, OrderUncheckedUpdateWithoutStockMovementsInput>
  }

  export type OrderUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutOrdersNestedInput
    client?: ClientUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyClientInput = {
    id?: string
    tableId?: string | null
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillCreateManyClientInput = {
    id?: string
    tableId: string
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    stockMovements?: StockMovementUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutBillsNestedInput
    billItems?: BillItemUpdateManyWithoutBillNestedInput
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billItems?: BillItemUncheckedUpdateManyWithoutBillNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyTableInput = {
    id?: string
    clientId?: string | null
    orderType?: $Enums.order_type
    status?: $Enums.order_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillCreateManyTableInput = {
    id?: string
    clientId?: string | null
    status?: $Enums.bill_status
    total: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    stockMovements?: StockMovementUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: Enumorder_typeFieldUpdateOperationsInput | $Enums.order_type
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutBillsNestedInput
    billItems?: BillItemUpdateManyWithoutBillNestedInput
    payments?: PaymentUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billItems?: BillItemUncheckedUpdateManyWithoutBillNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumbill_statusFieldUpdateOperationsInput | $Enums.bill_status
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishItems?: DishItemUpdateManyWithoutDishNestedInput
    orderItems?: OrderItemUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishItems?: DishItemUncheckedUpdateManyWithoutDishNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishItemCreateManyDishInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyDishInput = {
    id?: string
    orderId: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishItemUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDishItemsNestedInput
  }

  export type DishItemUncheckedUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishItemUncheckedUpdateManyWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    billItems?: BillItemUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billItems?: BillItemUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishItemCreateManyProductInput = {
    id?: string
    dishId: string
    quantity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateManyProductInput = {
    id?: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceId?: string | null
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dish?: DishUpdateOneRequiredWithoutDishItemsNestedInput
  }

  export type DishItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    dishId: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateManyOrderInput = {
    id?: string
    productId: string
    quantity: Decimal | DecimalJsLike | number | string
    movementType?: $Enums.movement_type
    referenceType?: $Enums.reference_type
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dish?: DishUpdateOneRequiredWithoutOrderItemsNestedInput
    billItems?: BillItemUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billItems?: BillItemUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    movementType?: Enummovement_typeFieldUpdateOperationsInput | $Enums.movement_type
    referenceType?: Enumreference_typeFieldUpdateOperationsInput | $Enums.reference_type
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemCreateManyOrderItemInput = {
    id?: string
    billId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillItemUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutBillItemsNestedInput
  }

  export type BillItemUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemUncheckedUpdateManyWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemCreateManyBillInput = {
    id?: string
    orderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyBillInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod?: $Enums.payment_method
    status?: $Enums.payment_status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillItemUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItem?: OrderItemUpdateOneRequiredWithoutBillItemsNestedInput
  }

  export type BillItemUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillItemUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}