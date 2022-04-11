type AutoMocked<T> = T extends (...args: readonly any[]) => any ? jest.MockedFunction<T> : T extends jest.Constructable ? jest.MockedClass<T> : T extends Record<string | number | symbol, unknown> ? jest.Mocked<T> : jest.Mock<T>

export const asMock = <T>(value: T) => value as AutoMocked<typeof value>