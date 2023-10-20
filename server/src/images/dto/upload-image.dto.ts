import { ApiProperty } from "@nestjs/swagger";

export class UploadImageDto {
  @ApiProperty({ type: 'string', format: 'binary', description: 'Image file' })
  image: any;

}