import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Menu } from './entities/menu.entity';
import { MenuService } from './menu.service';

@Resolver(() => Menu)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @Query(() => [Menu])
  menu() {
    return this.menuService.findAll();
  }

  @Query(() => Menu)
  menuById(@Args('id', { type: () => Int }) id: number) {
    return this.menuService.findOne(id);
  }
}
