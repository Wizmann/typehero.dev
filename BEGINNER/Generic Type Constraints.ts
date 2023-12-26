type AllowString<T extends string> = string;
type AllowNumber<T extends number> = number;

type Logger = (a: number) => void;

type CreateLogger<T extends Logger> = {
	log: T;
	exit: () => void;
};
