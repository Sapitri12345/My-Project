<?php

namespace App\Filament\Resources\LokasiWisataResource\Pages;

use App\Filament\Resources\LokasiWisataResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditLokasiWisata extends EditRecord
{
    protected static string $resource = LokasiWisataResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
