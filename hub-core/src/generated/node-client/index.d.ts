
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LocalTicket
 * 
 */
export type LocalTicket = $Result.DefaultSelection<Prisma.$LocalTicketPayload>
/**
 * Model LocalConfig
 * 
 */
export type LocalConfig = $Result.DefaultSelection<Prisma.$LocalConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TicketStatus: {
  WAITING: 'WAITING',
  CALLING: 'CALLING',
  SERVING: 'SERVING',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more LocalTickets
 * const localTickets = await prisma.localTicket.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more LocalTickets
   * const localTickets = await prisma.localTicket.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.localTicket`: Exposes CRUD operations for the **LocalTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocalTickets
    * const localTickets = await prisma.localTicket.findMany()
    * ```
    */
  get localTicket(): Prisma.LocalTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localConfig`: Exposes CRUD operations for the **LocalConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocalConfigs
    * const localConfigs = await prisma.localConfig.findMany()
    * ```
    */
  get localConfig(): Prisma.LocalConfigDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    LocalTicket: 'LocalTicket',
    LocalConfig: 'LocalConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "localTicket" | "localConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LocalTicket: {
        payload: Prisma.$LocalTicketPayload<ExtArgs>
        fields: Prisma.LocalTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>
          }
          findFirst: {
            args: Prisma.LocalTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>
          }
          findMany: {
            args: Prisma.LocalTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>[]
          }
          create: {
            args: Prisma.LocalTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>
          }
          createMany: {
            args: Prisma.LocalTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>[]
          }
          delete: {
            args: Prisma.LocalTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>
          }
          update: {
            args: Prisma.LocalTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>
          }
          deleteMany: {
            args: Prisma.LocalTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>[]
          }
          upsert: {
            args: Prisma.LocalTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalTicketPayload>
          }
          aggregate: {
            args: Prisma.LocalTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalTicket>
          }
          groupBy: {
            args: Prisma.LocalTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalTicketCountArgs<ExtArgs>
            result: $Utils.Optional<LocalTicketCountAggregateOutputType> | number
          }
        }
      }
      LocalConfig: {
        payload: Prisma.$LocalConfigPayload<ExtArgs>
        fields: Prisma.LocalConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>
          }
          findFirst: {
            args: Prisma.LocalConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>
          }
          findMany: {
            args: Prisma.LocalConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>[]
          }
          create: {
            args: Prisma.LocalConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>
          }
          createMany: {
            args: Prisma.LocalConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>[]
          }
          delete: {
            args: Prisma.LocalConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>
          }
          update: {
            args: Prisma.LocalConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>
          }
          deleteMany: {
            args: Prisma.LocalConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>[]
          }
          upsert: {
            args: Prisma.LocalConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalConfigPayload>
          }
          aggregate: {
            args: Prisma.LocalConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalConfig>
          }
          groupBy: {
            args: Prisma.LocalConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalConfigCountArgs<ExtArgs>
            result: $Utils.Optional<LocalConfigCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    localTicket?: LocalTicketOmit
    localConfig?: LocalConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model LocalTicket
   */

  export type AggregateLocalTicket = {
    _count: LocalTicketCountAggregateOutputType | null
    _avg: LocalTicketAvgAggregateOutputType | null
    _sum: LocalTicketSumAggregateOutputType | null
    _min: LocalTicketMinAggregateOutputType | null
    _max: LocalTicketMaxAggregateOutputType | null
  }

  export type LocalTicketAvgAggregateOutputType = {
    priorityLevel: number | null
  }

  export type LocalTicketSumAggregateOutputType = {
    priorityLevel: number | null
  }

  export type LocalTicketMinAggregateOutputType = {
    id: string | null
    number: string | null
    status: $Enums.TicketStatus | null
    priorityLevel: number | null
    isPriority: boolean | null
    isReassigned: boolean | null
    hasAppointment: boolean | null
    assignedTo: string | null
    metadata: string | null
    arrivalTime: Date | null
    calledTime: Date | null
    finishedTime: Date | null
    syncedWithHub: boolean | null
    hubTicketId: string | null
  }

  export type LocalTicketMaxAggregateOutputType = {
    id: string | null
    number: string | null
    status: $Enums.TicketStatus | null
    priorityLevel: number | null
    isPriority: boolean | null
    isReassigned: boolean | null
    hasAppointment: boolean | null
    assignedTo: string | null
    metadata: string | null
    arrivalTime: Date | null
    calledTime: Date | null
    finishedTime: Date | null
    syncedWithHub: boolean | null
    hubTicketId: string | null
  }

  export type LocalTicketCountAggregateOutputType = {
    id: number
    number: number
    status: number
    priorityLevel: number
    isPriority: number
    isReassigned: number
    hasAppointment: number
    assignedTo: number
    metadata: number
    arrivalTime: number
    calledTime: number
    finishedTime: number
    syncedWithHub: number
    hubTicketId: number
    _all: number
  }


  export type LocalTicketAvgAggregateInputType = {
    priorityLevel?: true
  }

  export type LocalTicketSumAggregateInputType = {
    priorityLevel?: true
  }

  export type LocalTicketMinAggregateInputType = {
    id?: true
    number?: true
    status?: true
    priorityLevel?: true
    isPriority?: true
    isReassigned?: true
    hasAppointment?: true
    assignedTo?: true
    metadata?: true
    arrivalTime?: true
    calledTime?: true
    finishedTime?: true
    syncedWithHub?: true
    hubTicketId?: true
  }

  export type LocalTicketMaxAggregateInputType = {
    id?: true
    number?: true
    status?: true
    priorityLevel?: true
    isPriority?: true
    isReassigned?: true
    hasAppointment?: true
    assignedTo?: true
    metadata?: true
    arrivalTime?: true
    calledTime?: true
    finishedTime?: true
    syncedWithHub?: true
    hubTicketId?: true
  }

  export type LocalTicketCountAggregateInputType = {
    id?: true
    number?: true
    status?: true
    priorityLevel?: true
    isPriority?: true
    isReassigned?: true
    hasAppointment?: true
    assignedTo?: true
    metadata?: true
    arrivalTime?: true
    calledTime?: true
    finishedTime?: true
    syncedWithHub?: true
    hubTicketId?: true
    _all?: true
  }

  export type LocalTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalTicket to aggregate.
     */
    where?: LocalTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalTickets to fetch.
     */
    orderBy?: LocalTicketOrderByWithRelationInput | LocalTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocalTickets
    **/
    _count?: true | LocalTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalTicketMaxAggregateInputType
  }

  export type GetLocalTicketAggregateType<T extends LocalTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalTicket[P]>
      : GetScalarType<T[P], AggregateLocalTicket[P]>
  }




  export type LocalTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalTicketWhereInput
    orderBy?: LocalTicketOrderByWithAggregationInput | LocalTicketOrderByWithAggregationInput[]
    by: LocalTicketScalarFieldEnum[] | LocalTicketScalarFieldEnum
    having?: LocalTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalTicketCountAggregateInputType | true
    _avg?: LocalTicketAvgAggregateInputType
    _sum?: LocalTicketSumAggregateInputType
    _min?: LocalTicketMinAggregateInputType
    _max?: LocalTicketMaxAggregateInputType
  }

  export type LocalTicketGroupByOutputType = {
    id: string
    number: string
    status: $Enums.TicketStatus
    priorityLevel: number
    isPriority: boolean
    isReassigned: boolean
    hasAppointment: boolean
    assignedTo: string | null
    metadata: string | null
    arrivalTime: Date
    calledTime: Date | null
    finishedTime: Date | null
    syncedWithHub: boolean
    hubTicketId: string | null
    _count: LocalTicketCountAggregateOutputType | null
    _avg: LocalTicketAvgAggregateOutputType | null
    _sum: LocalTicketSumAggregateOutputType | null
    _min: LocalTicketMinAggregateOutputType | null
    _max: LocalTicketMaxAggregateOutputType | null
  }

  type GetLocalTicketGroupByPayload<T extends LocalTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalTicketGroupByOutputType[P]>
            : GetScalarType<T[P], LocalTicketGroupByOutputType[P]>
        }
      >
    >


  export type LocalTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    status?: boolean
    priorityLevel?: boolean
    isPriority?: boolean
    isReassigned?: boolean
    hasAppointment?: boolean
    assignedTo?: boolean
    metadata?: boolean
    arrivalTime?: boolean
    calledTime?: boolean
    finishedTime?: boolean
    syncedWithHub?: boolean
    hubTicketId?: boolean
  }, ExtArgs["result"]["localTicket"]>

  export type LocalTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    status?: boolean
    priorityLevel?: boolean
    isPriority?: boolean
    isReassigned?: boolean
    hasAppointment?: boolean
    assignedTo?: boolean
    metadata?: boolean
    arrivalTime?: boolean
    calledTime?: boolean
    finishedTime?: boolean
    syncedWithHub?: boolean
    hubTicketId?: boolean
  }, ExtArgs["result"]["localTicket"]>

  export type LocalTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    status?: boolean
    priorityLevel?: boolean
    isPriority?: boolean
    isReassigned?: boolean
    hasAppointment?: boolean
    assignedTo?: boolean
    metadata?: boolean
    arrivalTime?: boolean
    calledTime?: boolean
    finishedTime?: boolean
    syncedWithHub?: boolean
    hubTicketId?: boolean
  }, ExtArgs["result"]["localTicket"]>

  export type LocalTicketSelectScalar = {
    id?: boolean
    number?: boolean
    status?: boolean
    priorityLevel?: boolean
    isPriority?: boolean
    isReassigned?: boolean
    hasAppointment?: boolean
    assignedTo?: boolean
    metadata?: boolean
    arrivalTime?: boolean
    calledTime?: boolean
    finishedTime?: boolean
    syncedWithHub?: boolean
    hubTicketId?: boolean
  }

  export type LocalTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "status" | "priorityLevel" | "isPriority" | "isReassigned" | "hasAppointment" | "assignedTo" | "metadata" | "arrivalTime" | "calledTime" | "finishedTime" | "syncedWithHub" | "hubTicketId", ExtArgs["result"]["localTicket"]>

  export type $LocalTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocalTicket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      status: $Enums.TicketStatus
      priorityLevel: number
      isPriority: boolean
      isReassigned: boolean
      hasAppointment: boolean
      assignedTo: string | null
      metadata: string | null
      arrivalTime: Date
      calledTime: Date | null
      finishedTime: Date | null
      syncedWithHub: boolean
      hubTicketId: string | null
    }, ExtArgs["result"]["localTicket"]>
    composites: {}
  }

  type LocalTicketGetPayload<S extends boolean | null | undefined | LocalTicketDefaultArgs> = $Result.GetResult<Prisma.$LocalTicketPayload, S>

  type LocalTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalTicketCountAggregateInputType | true
    }

  export interface LocalTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocalTicket'], meta: { name: 'LocalTicket' } }
    /**
     * Find zero or one LocalTicket that matches the filter.
     * @param {LocalTicketFindUniqueArgs} args - Arguments to find a LocalTicket
     * @example
     * // Get one LocalTicket
     * const localTicket = await prisma.localTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalTicketFindUniqueArgs>(args: SelectSubset<T, LocalTicketFindUniqueArgs<ExtArgs>>): Prisma__LocalTicketClient<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocalTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalTicketFindUniqueOrThrowArgs} args - Arguments to find a LocalTicket
     * @example
     * // Get one LocalTicket
     * const localTicket = await prisma.localTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalTicketClient<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalTicketFindFirstArgs} args - Arguments to find a LocalTicket
     * @example
     * // Get one LocalTicket
     * const localTicket = await prisma.localTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalTicketFindFirstArgs>(args?: SelectSubset<T, LocalTicketFindFirstArgs<ExtArgs>>): Prisma__LocalTicketClient<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalTicketFindFirstOrThrowArgs} args - Arguments to find a LocalTicket
     * @example
     * // Get one LocalTicket
     * const localTicket = await prisma.localTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalTicketClient<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocalTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocalTickets
     * const localTickets = await prisma.localTicket.findMany()
     * 
     * // Get first 10 LocalTickets
     * const localTickets = await prisma.localTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localTicketWithIdOnly = await prisma.localTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalTicketFindManyArgs>(args?: SelectSubset<T, LocalTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocalTicket.
     * @param {LocalTicketCreateArgs} args - Arguments to create a LocalTicket.
     * @example
     * // Create one LocalTicket
     * const LocalTicket = await prisma.localTicket.create({
     *   data: {
     *     // ... data to create a LocalTicket
     *   }
     * })
     * 
     */
    create<T extends LocalTicketCreateArgs>(args: SelectSubset<T, LocalTicketCreateArgs<ExtArgs>>): Prisma__LocalTicketClient<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocalTickets.
     * @param {LocalTicketCreateManyArgs} args - Arguments to create many LocalTickets.
     * @example
     * // Create many LocalTickets
     * const localTicket = await prisma.localTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalTicketCreateManyArgs>(args?: SelectSubset<T, LocalTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocalTickets and returns the data saved in the database.
     * @param {LocalTicketCreateManyAndReturnArgs} args - Arguments to create many LocalTickets.
     * @example
     * // Create many LocalTickets
     * const localTicket = await prisma.localTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocalTickets and only return the `id`
     * const localTicketWithIdOnly = await prisma.localTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocalTicket.
     * @param {LocalTicketDeleteArgs} args - Arguments to delete one LocalTicket.
     * @example
     * // Delete one LocalTicket
     * const LocalTicket = await prisma.localTicket.delete({
     *   where: {
     *     // ... filter to delete one LocalTicket
     *   }
     * })
     * 
     */
    delete<T extends LocalTicketDeleteArgs>(args: SelectSubset<T, LocalTicketDeleteArgs<ExtArgs>>): Prisma__LocalTicketClient<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocalTicket.
     * @param {LocalTicketUpdateArgs} args - Arguments to update one LocalTicket.
     * @example
     * // Update one LocalTicket
     * const localTicket = await prisma.localTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalTicketUpdateArgs>(args: SelectSubset<T, LocalTicketUpdateArgs<ExtArgs>>): Prisma__LocalTicketClient<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocalTickets.
     * @param {LocalTicketDeleteManyArgs} args - Arguments to filter LocalTickets to delete.
     * @example
     * // Delete a few LocalTickets
     * const { count } = await prisma.localTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalTicketDeleteManyArgs>(args?: SelectSubset<T, LocalTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocalTickets
     * const localTicket = await prisma.localTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalTicketUpdateManyArgs>(args: SelectSubset<T, LocalTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalTickets and returns the data updated in the database.
     * @param {LocalTicketUpdateManyAndReturnArgs} args - Arguments to update many LocalTickets.
     * @example
     * // Update many LocalTickets
     * const localTicket = await prisma.localTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocalTickets and only return the `id`
     * const localTicketWithIdOnly = await prisma.localTicket.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocalTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocalTicket.
     * @param {LocalTicketUpsertArgs} args - Arguments to update or create a LocalTicket.
     * @example
     * // Update or create a LocalTicket
     * const localTicket = await prisma.localTicket.upsert({
     *   create: {
     *     // ... data to create a LocalTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocalTicket we want to update
     *   }
     * })
     */
    upsert<T extends LocalTicketUpsertArgs>(args: SelectSubset<T, LocalTicketUpsertArgs<ExtArgs>>): Prisma__LocalTicketClient<$Result.GetResult<Prisma.$LocalTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocalTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalTicketCountArgs} args - Arguments to filter LocalTickets to count.
     * @example
     * // Count the number of LocalTickets
     * const count = await prisma.localTicket.count({
     *   where: {
     *     // ... the filter for the LocalTickets we want to count
     *   }
     * })
    **/
    count<T extends LocalTicketCountArgs>(
      args?: Subset<T, LocalTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocalTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalTicketAggregateArgs>(args: Subset<T, LocalTicketAggregateArgs>): Prisma.PrismaPromise<GetLocalTicketAggregateType<T>>

    /**
     * Group by LocalTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalTicketGroupByArgs} args - Group by arguments.
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
      T extends LocalTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalTicketGroupByArgs['orderBy'] }
        : { orderBy?: LocalTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocalTicket model
   */
  readonly fields: LocalTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocalTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LocalTicket model
   */
  interface LocalTicketFieldRefs {
    readonly id: FieldRef<"LocalTicket", 'String'>
    readonly number: FieldRef<"LocalTicket", 'String'>
    readonly status: FieldRef<"LocalTicket", 'TicketStatus'>
    readonly priorityLevel: FieldRef<"LocalTicket", 'Int'>
    readonly isPriority: FieldRef<"LocalTicket", 'Boolean'>
    readonly isReassigned: FieldRef<"LocalTicket", 'Boolean'>
    readonly hasAppointment: FieldRef<"LocalTicket", 'Boolean'>
    readonly assignedTo: FieldRef<"LocalTicket", 'String'>
    readonly metadata: FieldRef<"LocalTicket", 'String'>
    readonly arrivalTime: FieldRef<"LocalTicket", 'DateTime'>
    readonly calledTime: FieldRef<"LocalTicket", 'DateTime'>
    readonly finishedTime: FieldRef<"LocalTicket", 'DateTime'>
    readonly syncedWithHub: FieldRef<"LocalTicket", 'Boolean'>
    readonly hubTicketId: FieldRef<"LocalTicket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LocalTicket findUnique
   */
  export type LocalTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * Filter, which LocalTicket to fetch.
     */
    where: LocalTicketWhereUniqueInput
  }

  /**
   * LocalTicket findUniqueOrThrow
   */
  export type LocalTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * Filter, which LocalTicket to fetch.
     */
    where: LocalTicketWhereUniqueInput
  }

  /**
   * LocalTicket findFirst
   */
  export type LocalTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * Filter, which LocalTicket to fetch.
     */
    where?: LocalTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalTickets to fetch.
     */
    orderBy?: LocalTicketOrderByWithRelationInput | LocalTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalTickets.
     */
    cursor?: LocalTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalTickets.
     */
    distinct?: LocalTicketScalarFieldEnum | LocalTicketScalarFieldEnum[]
  }

  /**
   * LocalTicket findFirstOrThrow
   */
  export type LocalTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * Filter, which LocalTicket to fetch.
     */
    where?: LocalTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalTickets to fetch.
     */
    orderBy?: LocalTicketOrderByWithRelationInput | LocalTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalTickets.
     */
    cursor?: LocalTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalTickets.
     */
    distinct?: LocalTicketScalarFieldEnum | LocalTicketScalarFieldEnum[]
  }

  /**
   * LocalTicket findMany
   */
  export type LocalTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * Filter, which LocalTickets to fetch.
     */
    where?: LocalTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalTickets to fetch.
     */
    orderBy?: LocalTicketOrderByWithRelationInput | LocalTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocalTickets.
     */
    cursor?: LocalTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalTickets.
     */
    distinct?: LocalTicketScalarFieldEnum | LocalTicketScalarFieldEnum[]
  }

  /**
   * LocalTicket create
   */
  export type LocalTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * The data needed to create a LocalTicket.
     */
    data: XOR<LocalTicketCreateInput, LocalTicketUncheckedCreateInput>
  }

  /**
   * LocalTicket createMany
   */
  export type LocalTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocalTickets.
     */
    data: LocalTicketCreateManyInput | LocalTicketCreateManyInput[]
  }

  /**
   * LocalTicket createManyAndReturn
   */
  export type LocalTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * The data used to create many LocalTickets.
     */
    data: LocalTicketCreateManyInput | LocalTicketCreateManyInput[]
  }

  /**
   * LocalTicket update
   */
  export type LocalTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * The data needed to update a LocalTicket.
     */
    data: XOR<LocalTicketUpdateInput, LocalTicketUncheckedUpdateInput>
    /**
     * Choose, which LocalTicket to update.
     */
    where: LocalTicketWhereUniqueInput
  }

  /**
   * LocalTicket updateMany
   */
  export type LocalTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocalTickets.
     */
    data: XOR<LocalTicketUpdateManyMutationInput, LocalTicketUncheckedUpdateManyInput>
    /**
     * Filter which LocalTickets to update
     */
    where?: LocalTicketWhereInput
    /**
     * Limit how many LocalTickets to update.
     */
    limit?: number
  }

  /**
   * LocalTicket updateManyAndReturn
   */
  export type LocalTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * The data used to update LocalTickets.
     */
    data: XOR<LocalTicketUpdateManyMutationInput, LocalTicketUncheckedUpdateManyInput>
    /**
     * Filter which LocalTickets to update
     */
    where?: LocalTicketWhereInput
    /**
     * Limit how many LocalTickets to update.
     */
    limit?: number
  }

  /**
   * LocalTicket upsert
   */
  export type LocalTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * The filter to search for the LocalTicket to update in case it exists.
     */
    where: LocalTicketWhereUniqueInput
    /**
     * In case the LocalTicket found by the `where` argument doesn't exist, create a new LocalTicket with this data.
     */
    create: XOR<LocalTicketCreateInput, LocalTicketUncheckedCreateInput>
    /**
     * In case the LocalTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalTicketUpdateInput, LocalTicketUncheckedUpdateInput>
  }

  /**
   * LocalTicket delete
   */
  export type LocalTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
    /**
     * Filter which LocalTicket to delete.
     */
    where: LocalTicketWhereUniqueInput
  }

  /**
   * LocalTicket deleteMany
   */
  export type LocalTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalTickets to delete
     */
    where?: LocalTicketWhereInput
    /**
     * Limit how many LocalTickets to delete.
     */
    limit?: number
  }

  /**
   * LocalTicket without action
   */
  export type LocalTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalTicket
     */
    select?: LocalTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalTicket
     */
    omit?: LocalTicketOmit<ExtArgs> | null
  }


  /**
   * Model LocalConfig
   */

  export type AggregateLocalConfig = {
    _count: LocalConfigCountAggregateOutputType | null
    _avg: LocalConfigAvgAggregateOutputType | null
    _sum: LocalConfigSumAggregateOutputType | null
    _min: LocalConfigMinAggregateOutputType | null
    _max: LocalConfigMaxAggregateOutputType | null
  }

  export type LocalConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type LocalConfigSumAggregateOutputType = {
    id: number | null
  }

  export type LocalConfigMinAggregateOutputType = {
    id: number | null
    branchId: string | null
    branchName: string | null
    organizationId: string | null
    hubToken: string | null
    lastSync: Date | null
  }

  export type LocalConfigMaxAggregateOutputType = {
    id: number | null
    branchId: string | null
    branchName: string | null
    organizationId: string | null
    hubToken: string | null
    lastSync: Date | null
  }

  export type LocalConfigCountAggregateOutputType = {
    id: number
    branchId: number
    branchName: number
    organizationId: number
    hubToken: number
    lastSync: number
    _all: number
  }


  export type LocalConfigAvgAggregateInputType = {
    id?: true
  }

  export type LocalConfigSumAggregateInputType = {
    id?: true
  }

  export type LocalConfigMinAggregateInputType = {
    id?: true
    branchId?: true
    branchName?: true
    organizationId?: true
    hubToken?: true
    lastSync?: true
  }

  export type LocalConfigMaxAggregateInputType = {
    id?: true
    branchId?: true
    branchName?: true
    organizationId?: true
    hubToken?: true
    lastSync?: true
  }

  export type LocalConfigCountAggregateInputType = {
    id?: true
    branchId?: true
    branchName?: true
    organizationId?: true
    hubToken?: true
    lastSync?: true
    _all?: true
  }

  export type LocalConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalConfig to aggregate.
     */
    where?: LocalConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalConfigs to fetch.
     */
    orderBy?: LocalConfigOrderByWithRelationInput | LocalConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocalConfigs
    **/
    _count?: true | LocalConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalConfigMaxAggregateInputType
  }

  export type GetLocalConfigAggregateType<T extends LocalConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalConfig[P]>
      : GetScalarType<T[P], AggregateLocalConfig[P]>
  }




  export type LocalConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalConfigWhereInput
    orderBy?: LocalConfigOrderByWithAggregationInput | LocalConfigOrderByWithAggregationInput[]
    by: LocalConfigScalarFieldEnum[] | LocalConfigScalarFieldEnum
    having?: LocalConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalConfigCountAggregateInputType | true
    _avg?: LocalConfigAvgAggregateInputType
    _sum?: LocalConfigSumAggregateInputType
    _min?: LocalConfigMinAggregateInputType
    _max?: LocalConfigMaxAggregateInputType
  }

  export type LocalConfigGroupByOutputType = {
    id: number
    branchId: string
    branchName: string
    organizationId: string
    hubToken: string
    lastSync: Date | null
    _count: LocalConfigCountAggregateOutputType | null
    _avg: LocalConfigAvgAggregateOutputType | null
    _sum: LocalConfigSumAggregateOutputType | null
    _min: LocalConfigMinAggregateOutputType | null
    _max: LocalConfigMaxAggregateOutputType | null
  }

  type GetLocalConfigGroupByPayload<T extends LocalConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalConfigGroupByOutputType[P]>
            : GetScalarType<T[P], LocalConfigGroupByOutputType[P]>
        }
      >
    >


  export type LocalConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    branchName?: boolean
    organizationId?: boolean
    hubToken?: boolean
    lastSync?: boolean
  }, ExtArgs["result"]["localConfig"]>

  export type LocalConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    branchName?: boolean
    organizationId?: boolean
    hubToken?: boolean
    lastSync?: boolean
  }, ExtArgs["result"]["localConfig"]>

  export type LocalConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    branchName?: boolean
    organizationId?: boolean
    hubToken?: boolean
    lastSync?: boolean
  }, ExtArgs["result"]["localConfig"]>

  export type LocalConfigSelectScalar = {
    id?: boolean
    branchId?: boolean
    branchName?: boolean
    organizationId?: boolean
    hubToken?: boolean
    lastSync?: boolean
  }

  export type LocalConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branchId" | "branchName" | "organizationId" | "hubToken" | "lastSync", ExtArgs["result"]["localConfig"]>

  export type $LocalConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocalConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      branchId: string
      branchName: string
      organizationId: string
      hubToken: string
      lastSync: Date | null
    }, ExtArgs["result"]["localConfig"]>
    composites: {}
  }

  type LocalConfigGetPayload<S extends boolean | null | undefined | LocalConfigDefaultArgs> = $Result.GetResult<Prisma.$LocalConfigPayload, S>

  type LocalConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalConfigCountAggregateInputType | true
    }

  export interface LocalConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocalConfig'], meta: { name: 'LocalConfig' } }
    /**
     * Find zero or one LocalConfig that matches the filter.
     * @param {LocalConfigFindUniqueArgs} args - Arguments to find a LocalConfig
     * @example
     * // Get one LocalConfig
     * const localConfig = await prisma.localConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalConfigFindUniqueArgs>(args: SelectSubset<T, LocalConfigFindUniqueArgs<ExtArgs>>): Prisma__LocalConfigClient<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocalConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalConfigFindUniqueOrThrowArgs} args - Arguments to find a LocalConfig
     * @example
     * // Get one LocalConfig
     * const localConfig = await prisma.localConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalConfigClient<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalConfigFindFirstArgs} args - Arguments to find a LocalConfig
     * @example
     * // Get one LocalConfig
     * const localConfig = await prisma.localConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalConfigFindFirstArgs>(args?: SelectSubset<T, LocalConfigFindFirstArgs<ExtArgs>>): Prisma__LocalConfigClient<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalConfigFindFirstOrThrowArgs} args - Arguments to find a LocalConfig
     * @example
     * // Get one LocalConfig
     * const localConfig = await prisma.localConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalConfigClient<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocalConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocalConfigs
     * const localConfigs = await prisma.localConfig.findMany()
     * 
     * // Get first 10 LocalConfigs
     * const localConfigs = await prisma.localConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localConfigWithIdOnly = await prisma.localConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalConfigFindManyArgs>(args?: SelectSubset<T, LocalConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocalConfig.
     * @param {LocalConfigCreateArgs} args - Arguments to create a LocalConfig.
     * @example
     * // Create one LocalConfig
     * const LocalConfig = await prisma.localConfig.create({
     *   data: {
     *     // ... data to create a LocalConfig
     *   }
     * })
     * 
     */
    create<T extends LocalConfigCreateArgs>(args: SelectSubset<T, LocalConfigCreateArgs<ExtArgs>>): Prisma__LocalConfigClient<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocalConfigs.
     * @param {LocalConfigCreateManyArgs} args - Arguments to create many LocalConfigs.
     * @example
     * // Create many LocalConfigs
     * const localConfig = await prisma.localConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalConfigCreateManyArgs>(args?: SelectSubset<T, LocalConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocalConfigs and returns the data saved in the database.
     * @param {LocalConfigCreateManyAndReturnArgs} args - Arguments to create many LocalConfigs.
     * @example
     * // Create many LocalConfigs
     * const localConfig = await prisma.localConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocalConfigs and only return the `id`
     * const localConfigWithIdOnly = await prisma.localConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocalConfig.
     * @param {LocalConfigDeleteArgs} args - Arguments to delete one LocalConfig.
     * @example
     * // Delete one LocalConfig
     * const LocalConfig = await prisma.localConfig.delete({
     *   where: {
     *     // ... filter to delete one LocalConfig
     *   }
     * })
     * 
     */
    delete<T extends LocalConfigDeleteArgs>(args: SelectSubset<T, LocalConfigDeleteArgs<ExtArgs>>): Prisma__LocalConfigClient<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocalConfig.
     * @param {LocalConfigUpdateArgs} args - Arguments to update one LocalConfig.
     * @example
     * // Update one LocalConfig
     * const localConfig = await prisma.localConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalConfigUpdateArgs>(args: SelectSubset<T, LocalConfigUpdateArgs<ExtArgs>>): Prisma__LocalConfigClient<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocalConfigs.
     * @param {LocalConfigDeleteManyArgs} args - Arguments to filter LocalConfigs to delete.
     * @example
     * // Delete a few LocalConfigs
     * const { count } = await prisma.localConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalConfigDeleteManyArgs>(args?: SelectSubset<T, LocalConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocalConfigs
     * const localConfig = await prisma.localConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalConfigUpdateManyArgs>(args: SelectSubset<T, LocalConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalConfigs and returns the data updated in the database.
     * @param {LocalConfigUpdateManyAndReturnArgs} args - Arguments to update many LocalConfigs.
     * @example
     * // Update many LocalConfigs
     * const localConfig = await prisma.localConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocalConfigs and only return the `id`
     * const localConfigWithIdOnly = await prisma.localConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocalConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocalConfig.
     * @param {LocalConfigUpsertArgs} args - Arguments to update or create a LocalConfig.
     * @example
     * // Update or create a LocalConfig
     * const localConfig = await prisma.localConfig.upsert({
     *   create: {
     *     // ... data to create a LocalConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocalConfig we want to update
     *   }
     * })
     */
    upsert<T extends LocalConfigUpsertArgs>(args: SelectSubset<T, LocalConfigUpsertArgs<ExtArgs>>): Prisma__LocalConfigClient<$Result.GetResult<Prisma.$LocalConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocalConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalConfigCountArgs} args - Arguments to filter LocalConfigs to count.
     * @example
     * // Count the number of LocalConfigs
     * const count = await prisma.localConfig.count({
     *   where: {
     *     // ... the filter for the LocalConfigs we want to count
     *   }
     * })
    **/
    count<T extends LocalConfigCountArgs>(
      args?: Subset<T, LocalConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocalConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalConfigAggregateArgs>(args: Subset<T, LocalConfigAggregateArgs>): Prisma.PrismaPromise<GetLocalConfigAggregateType<T>>

    /**
     * Group by LocalConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalConfigGroupByArgs} args - Group by arguments.
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
      T extends LocalConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalConfigGroupByArgs['orderBy'] }
        : { orderBy?: LocalConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocalConfig model
   */
  readonly fields: LocalConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocalConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LocalConfig model
   */
  interface LocalConfigFieldRefs {
    readonly id: FieldRef<"LocalConfig", 'Int'>
    readonly branchId: FieldRef<"LocalConfig", 'String'>
    readonly branchName: FieldRef<"LocalConfig", 'String'>
    readonly organizationId: FieldRef<"LocalConfig", 'String'>
    readonly hubToken: FieldRef<"LocalConfig", 'String'>
    readonly lastSync: FieldRef<"LocalConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocalConfig findUnique
   */
  export type LocalConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * Filter, which LocalConfig to fetch.
     */
    where: LocalConfigWhereUniqueInput
  }

  /**
   * LocalConfig findUniqueOrThrow
   */
  export type LocalConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * Filter, which LocalConfig to fetch.
     */
    where: LocalConfigWhereUniqueInput
  }

  /**
   * LocalConfig findFirst
   */
  export type LocalConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * Filter, which LocalConfig to fetch.
     */
    where?: LocalConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalConfigs to fetch.
     */
    orderBy?: LocalConfigOrderByWithRelationInput | LocalConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalConfigs.
     */
    cursor?: LocalConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalConfigs.
     */
    distinct?: LocalConfigScalarFieldEnum | LocalConfigScalarFieldEnum[]
  }

  /**
   * LocalConfig findFirstOrThrow
   */
  export type LocalConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * Filter, which LocalConfig to fetch.
     */
    where?: LocalConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalConfigs to fetch.
     */
    orderBy?: LocalConfigOrderByWithRelationInput | LocalConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalConfigs.
     */
    cursor?: LocalConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalConfigs.
     */
    distinct?: LocalConfigScalarFieldEnum | LocalConfigScalarFieldEnum[]
  }

  /**
   * LocalConfig findMany
   */
  export type LocalConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * Filter, which LocalConfigs to fetch.
     */
    where?: LocalConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalConfigs to fetch.
     */
    orderBy?: LocalConfigOrderByWithRelationInput | LocalConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocalConfigs.
     */
    cursor?: LocalConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalConfigs.
     */
    distinct?: LocalConfigScalarFieldEnum | LocalConfigScalarFieldEnum[]
  }

  /**
   * LocalConfig create
   */
  export type LocalConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a LocalConfig.
     */
    data: XOR<LocalConfigCreateInput, LocalConfigUncheckedCreateInput>
  }

  /**
   * LocalConfig createMany
   */
  export type LocalConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocalConfigs.
     */
    data: LocalConfigCreateManyInput | LocalConfigCreateManyInput[]
  }

  /**
   * LocalConfig createManyAndReturn
   */
  export type LocalConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * The data used to create many LocalConfigs.
     */
    data: LocalConfigCreateManyInput | LocalConfigCreateManyInput[]
  }

  /**
   * LocalConfig update
   */
  export type LocalConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a LocalConfig.
     */
    data: XOR<LocalConfigUpdateInput, LocalConfigUncheckedUpdateInput>
    /**
     * Choose, which LocalConfig to update.
     */
    where: LocalConfigWhereUniqueInput
  }

  /**
   * LocalConfig updateMany
   */
  export type LocalConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocalConfigs.
     */
    data: XOR<LocalConfigUpdateManyMutationInput, LocalConfigUncheckedUpdateManyInput>
    /**
     * Filter which LocalConfigs to update
     */
    where?: LocalConfigWhereInput
    /**
     * Limit how many LocalConfigs to update.
     */
    limit?: number
  }

  /**
   * LocalConfig updateManyAndReturn
   */
  export type LocalConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * The data used to update LocalConfigs.
     */
    data: XOR<LocalConfigUpdateManyMutationInput, LocalConfigUncheckedUpdateManyInput>
    /**
     * Filter which LocalConfigs to update
     */
    where?: LocalConfigWhereInput
    /**
     * Limit how many LocalConfigs to update.
     */
    limit?: number
  }

  /**
   * LocalConfig upsert
   */
  export type LocalConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the LocalConfig to update in case it exists.
     */
    where: LocalConfigWhereUniqueInput
    /**
     * In case the LocalConfig found by the `where` argument doesn't exist, create a new LocalConfig with this data.
     */
    create: XOR<LocalConfigCreateInput, LocalConfigUncheckedCreateInput>
    /**
     * In case the LocalConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalConfigUpdateInput, LocalConfigUncheckedUpdateInput>
  }

  /**
   * LocalConfig delete
   */
  export type LocalConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
    /**
     * Filter which LocalConfig to delete.
     */
    where: LocalConfigWhereUniqueInput
  }

  /**
   * LocalConfig deleteMany
   */
  export type LocalConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalConfigs to delete
     */
    where?: LocalConfigWhereInput
    /**
     * Limit how many LocalConfigs to delete.
     */
    limit?: number
  }

  /**
   * LocalConfig without action
   */
  export type LocalConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalConfig
     */
    select?: LocalConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalConfig
     */
    omit?: LocalConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LocalTicketScalarFieldEnum: {
    id: 'id',
    number: 'number',
    status: 'status',
    priorityLevel: 'priorityLevel',
    isPriority: 'isPriority',
    isReassigned: 'isReassigned',
    hasAppointment: 'hasAppointment',
    assignedTo: 'assignedTo',
    metadata: 'metadata',
    arrivalTime: 'arrivalTime',
    calledTime: 'calledTime',
    finishedTime: 'finishedTime',
    syncedWithHub: 'syncedWithHub',
    hubTicketId: 'hubTicketId'
  };

  export type LocalTicketScalarFieldEnum = (typeof LocalTicketScalarFieldEnum)[keyof typeof LocalTicketScalarFieldEnum]


  export const LocalConfigScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    branchName: 'branchName',
    organizationId: 'organizationId',
    hubToken: 'hubToken',
    lastSync: 'lastSync'
  };

  export type LocalConfigScalarFieldEnum = (typeof LocalConfigScalarFieldEnum)[keyof typeof LocalConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LocalTicketWhereInput = {
    AND?: LocalTicketWhereInput | LocalTicketWhereInput[]
    OR?: LocalTicketWhereInput[]
    NOT?: LocalTicketWhereInput | LocalTicketWhereInput[]
    id?: StringFilter<"LocalTicket"> | string
    number?: StringFilter<"LocalTicket"> | string
    status?: EnumTicketStatusFilter<"LocalTicket"> | $Enums.TicketStatus
    priorityLevel?: IntFilter<"LocalTicket"> | number
    isPriority?: BoolFilter<"LocalTicket"> | boolean
    isReassigned?: BoolFilter<"LocalTicket"> | boolean
    hasAppointment?: BoolFilter<"LocalTicket"> | boolean
    assignedTo?: StringNullableFilter<"LocalTicket"> | string | null
    metadata?: StringNullableFilter<"LocalTicket"> | string | null
    arrivalTime?: DateTimeFilter<"LocalTicket"> | Date | string
    calledTime?: DateTimeNullableFilter<"LocalTicket"> | Date | string | null
    finishedTime?: DateTimeNullableFilter<"LocalTicket"> | Date | string | null
    syncedWithHub?: BoolFilter<"LocalTicket"> | boolean
    hubTicketId?: StringNullableFilter<"LocalTicket"> | string | null
  }

  export type LocalTicketOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priorityLevel?: SortOrder
    isPriority?: SortOrder
    isReassigned?: SortOrder
    hasAppointment?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    arrivalTime?: SortOrder
    calledTime?: SortOrderInput | SortOrder
    finishedTime?: SortOrderInput | SortOrder
    syncedWithHub?: SortOrder
    hubTicketId?: SortOrderInput | SortOrder
  }

  export type LocalTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocalTicketWhereInput | LocalTicketWhereInput[]
    OR?: LocalTicketWhereInput[]
    NOT?: LocalTicketWhereInput | LocalTicketWhereInput[]
    number?: StringFilter<"LocalTicket"> | string
    status?: EnumTicketStatusFilter<"LocalTicket"> | $Enums.TicketStatus
    priorityLevel?: IntFilter<"LocalTicket"> | number
    isPriority?: BoolFilter<"LocalTicket"> | boolean
    isReassigned?: BoolFilter<"LocalTicket"> | boolean
    hasAppointment?: BoolFilter<"LocalTicket"> | boolean
    assignedTo?: StringNullableFilter<"LocalTicket"> | string | null
    metadata?: StringNullableFilter<"LocalTicket"> | string | null
    arrivalTime?: DateTimeFilter<"LocalTicket"> | Date | string
    calledTime?: DateTimeNullableFilter<"LocalTicket"> | Date | string | null
    finishedTime?: DateTimeNullableFilter<"LocalTicket"> | Date | string | null
    syncedWithHub?: BoolFilter<"LocalTicket"> | boolean
    hubTicketId?: StringNullableFilter<"LocalTicket"> | string | null
  }, "id">

  export type LocalTicketOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priorityLevel?: SortOrder
    isPriority?: SortOrder
    isReassigned?: SortOrder
    hasAppointment?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    arrivalTime?: SortOrder
    calledTime?: SortOrderInput | SortOrder
    finishedTime?: SortOrderInput | SortOrder
    syncedWithHub?: SortOrder
    hubTicketId?: SortOrderInput | SortOrder
    _count?: LocalTicketCountOrderByAggregateInput
    _avg?: LocalTicketAvgOrderByAggregateInput
    _max?: LocalTicketMaxOrderByAggregateInput
    _min?: LocalTicketMinOrderByAggregateInput
    _sum?: LocalTicketSumOrderByAggregateInput
  }

  export type LocalTicketScalarWhereWithAggregatesInput = {
    AND?: LocalTicketScalarWhereWithAggregatesInput | LocalTicketScalarWhereWithAggregatesInput[]
    OR?: LocalTicketScalarWhereWithAggregatesInput[]
    NOT?: LocalTicketScalarWhereWithAggregatesInput | LocalTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LocalTicket"> | string
    number?: StringWithAggregatesFilter<"LocalTicket"> | string
    status?: EnumTicketStatusWithAggregatesFilter<"LocalTicket"> | $Enums.TicketStatus
    priorityLevel?: IntWithAggregatesFilter<"LocalTicket"> | number
    isPriority?: BoolWithAggregatesFilter<"LocalTicket"> | boolean
    isReassigned?: BoolWithAggregatesFilter<"LocalTicket"> | boolean
    hasAppointment?: BoolWithAggregatesFilter<"LocalTicket"> | boolean
    assignedTo?: StringNullableWithAggregatesFilter<"LocalTicket"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"LocalTicket"> | string | null
    arrivalTime?: DateTimeWithAggregatesFilter<"LocalTicket"> | Date | string
    calledTime?: DateTimeNullableWithAggregatesFilter<"LocalTicket"> | Date | string | null
    finishedTime?: DateTimeNullableWithAggregatesFilter<"LocalTicket"> | Date | string | null
    syncedWithHub?: BoolWithAggregatesFilter<"LocalTicket"> | boolean
    hubTicketId?: StringNullableWithAggregatesFilter<"LocalTicket"> | string | null
  }

  export type LocalConfigWhereInput = {
    AND?: LocalConfigWhereInput | LocalConfigWhereInput[]
    OR?: LocalConfigWhereInput[]
    NOT?: LocalConfigWhereInput | LocalConfigWhereInput[]
    id?: IntFilter<"LocalConfig"> | number
    branchId?: StringFilter<"LocalConfig"> | string
    branchName?: StringFilter<"LocalConfig"> | string
    organizationId?: StringFilter<"LocalConfig"> | string
    hubToken?: StringFilter<"LocalConfig"> | string
    lastSync?: DateTimeNullableFilter<"LocalConfig"> | Date | string | null
  }

  export type LocalConfigOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrder
    branchName?: SortOrder
    organizationId?: SortOrder
    hubToken?: SortOrder
    lastSync?: SortOrderInput | SortOrder
  }

  export type LocalConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalConfigWhereInput | LocalConfigWhereInput[]
    OR?: LocalConfigWhereInput[]
    NOT?: LocalConfigWhereInput | LocalConfigWhereInput[]
    branchId?: StringFilter<"LocalConfig"> | string
    branchName?: StringFilter<"LocalConfig"> | string
    organizationId?: StringFilter<"LocalConfig"> | string
    hubToken?: StringFilter<"LocalConfig"> | string
    lastSync?: DateTimeNullableFilter<"LocalConfig"> | Date | string | null
  }, "id">

  export type LocalConfigOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrder
    branchName?: SortOrder
    organizationId?: SortOrder
    hubToken?: SortOrder
    lastSync?: SortOrderInput | SortOrder
    _count?: LocalConfigCountOrderByAggregateInput
    _avg?: LocalConfigAvgOrderByAggregateInput
    _max?: LocalConfigMaxOrderByAggregateInput
    _min?: LocalConfigMinOrderByAggregateInput
    _sum?: LocalConfigSumOrderByAggregateInput
  }

  export type LocalConfigScalarWhereWithAggregatesInput = {
    AND?: LocalConfigScalarWhereWithAggregatesInput | LocalConfigScalarWhereWithAggregatesInput[]
    OR?: LocalConfigScalarWhereWithAggregatesInput[]
    NOT?: LocalConfigScalarWhereWithAggregatesInput | LocalConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LocalConfig"> | number
    branchId?: StringWithAggregatesFilter<"LocalConfig"> | string
    branchName?: StringWithAggregatesFilter<"LocalConfig"> | string
    organizationId?: StringWithAggregatesFilter<"LocalConfig"> | string
    hubToken?: StringWithAggregatesFilter<"LocalConfig"> | string
    lastSync?: DateTimeNullableWithAggregatesFilter<"LocalConfig"> | Date | string | null
  }

  export type LocalTicketCreateInput = {
    id?: string
    number: string
    status?: $Enums.TicketStatus
    priorityLevel?: number
    isPriority?: boolean
    isReassigned?: boolean
    hasAppointment?: boolean
    assignedTo?: string | null
    metadata?: string | null
    arrivalTime?: Date | string
    calledTime?: Date | string | null
    finishedTime?: Date | string | null
    syncedWithHub?: boolean
    hubTicketId?: string | null
  }

  export type LocalTicketUncheckedCreateInput = {
    id?: string
    number: string
    status?: $Enums.TicketStatus
    priorityLevel?: number
    isPriority?: boolean
    isReassigned?: boolean
    hasAppointment?: boolean
    assignedTo?: string | null
    metadata?: string | null
    arrivalTime?: Date | string
    calledTime?: Date | string | null
    finishedTime?: Date | string | null
    syncedWithHub?: boolean
    hubTicketId?: string | null
  }

  export type LocalTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priorityLevel?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    isReassigned?: BoolFieldUpdateOperationsInput | boolean
    hasAppointment?: BoolFieldUpdateOperationsInput | boolean
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncedWithHub?: BoolFieldUpdateOperationsInput | boolean
    hubTicketId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priorityLevel?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    isReassigned?: BoolFieldUpdateOperationsInput | boolean
    hasAppointment?: BoolFieldUpdateOperationsInput | boolean
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncedWithHub?: BoolFieldUpdateOperationsInput | boolean
    hubTicketId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalTicketCreateManyInput = {
    id?: string
    number: string
    status?: $Enums.TicketStatus
    priorityLevel?: number
    isPriority?: boolean
    isReassigned?: boolean
    hasAppointment?: boolean
    assignedTo?: string | null
    metadata?: string | null
    arrivalTime?: Date | string
    calledTime?: Date | string | null
    finishedTime?: Date | string | null
    syncedWithHub?: boolean
    hubTicketId?: string | null
  }

  export type LocalTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priorityLevel?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    isReassigned?: BoolFieldUpdateOperationsInput | boolean
    hasAppointment?: BoolFieldUpdateOperationsInput | boolean
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncedWithHub?: BoolFieldUpdateOperationsInput | boolean
    hubTicketId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priorityLevel?: IntFieldUpdateOperationsInput | number
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    isReassigned?: BoolFieldUpdateOperationsInput | boolean
    hasAppointment?: BoolFieldUpdateOperationsInput | boolean
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    calledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncedWithHub?: BoolFieldUpdateOperationsInput | boolean
    hubTicketId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalConfigCreateInput = {
    id?: number
    branchId: string
    branchName: string
    organizationId: string
    hubToken: string
    lastSync?: Date | string | null
  }

  export type LocalConfigUncheckedCreateInput = {
    id?: number
    branchId: string
    branchName: string
    organizationId: string
    hubToken: string
    lastSync?: Date | string | null
  }

  export type LocalConfigUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: StringFieldUpdateOperationsInput | string
    branchName?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    hubToken?: StringFieldUpdateOperationsInput | string
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocalConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: StringFieldUpdateOperationsInput | string
    branchName?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    hubToken?: StringFieldUpdateOperationsInput | string
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocalConfigCreateManyInput = {
    id?: number
    branchId: string
    branchName: string
    organizationId: string
    hubToken: string
    lastSync?: Date | string | null
  }

  export type LocalConfigUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: StringFieldUpdateOperationsInput | string
    branchName?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    hubToken?: StringFieldUpdateOperationsInput | string
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocalConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: StringFieldUpdateOperationsInput | string
    branchName?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    hubToken?: StringFieldUpdateOperationsInput | string
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LocalTicketCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priorityLevel?: SortOrder
    isPriority?: SortOrder
    isReassigned?: SortOrder
    hasAppointment?: SortOrder
    assignedTo?: SortOrder
    metadata?: SortOrder
    arrivalTime?: SortOrder
    calledTime?: SortOrder
    finishedTime?: SortOrder
    syncedWithHub?: SortOrder
    hubTicketId?: SortOrder
  }

  export type LocalTicketAvgOrderByAggregateInput = {
    priorityLevel?: SortOrder
  }

  export type LocalTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priorityLevel?: SortOrder
    isPriority?: SortOrder
    isReassigned?: SortOrder
    hasAppointment?: SortOrder
    assignedTo?: SortOrder
    metadata?: SortOrder
    arrivalTime?: SortOrder
    calledTime?: SortOrder
    finishedTime?: SortOrder
    syncedWithHub?: SortOrder
    hubTicketId?: SortOrder
  }

  export type LocalTicketMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    status?: SortOrder
    priorityLevel?: SortOrder
    isPriority?: SortOrder
    isReassigned?: SortOrder
    hasAppointment?: SortOrder
    assignedTo?: SortOrder
    metadata?: SortOrder
    arrivalTime?: SortOrder
    calledTime?: SortOrder
    finishedTime?: SortOrder
    syncedWithHub?: SortOrder
    hubTicketId?: SortOrder
  }

  export type LocalTicketSumOrderByAggregateInput = {
    priorityLevel?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LocalConfigCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    branchName?: SortOrder
    organizationId?: SortOrder
    hubToken?: SortOrder
    lastSync?: SortOrder
  }

  export type LocalConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    branchName?: SortOrder
    organizationId?: SortOrder
    hubToken?: SortOrder
    lastSync?: SortOrder
  }

  export type LocalConfigMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    branchName?: SortOrder
    organizationId?: SortOrder
    hubToken?: SortOrder
    lastSync?: SortOrder
  }

  export type LocalConfigSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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