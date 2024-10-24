import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Menu {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  description: string;

  @Field(() => String)
  image: string;
}
