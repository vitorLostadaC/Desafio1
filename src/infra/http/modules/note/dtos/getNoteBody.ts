import { IsStringCustom } from 'src/infra/http/classValidator/decorators/IsStringCustom';
import { IsNotEmptyCustom } from 'src/infra/http/classValidator/decorators/IsNotEmptyCustom'
import { ApiProperty } from '@nestjs/swagger';

export class GetNoteBody {
    @IsStringCustom()
    @IsNotEmptyCustom()
    @ApiProperty()
    id: string;
}