import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  private readonly baseUrl: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.baseUrl =
      this.configService.get('API_URL') || 'http://localhost:4001/menus';
  }

  async findAll(): Promise<Menu[]> {
    return this.httpService.axiosRef.get(this.baseUrl).then((res) => res.data);
  }

  async findOne(id: number) {
    return this.httpService.axiosRef
      .get(`${this.baseUrl}/${id}`)
      .then((res) => res.data);
  }
}
