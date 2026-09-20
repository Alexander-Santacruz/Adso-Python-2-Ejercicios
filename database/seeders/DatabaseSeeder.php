<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Limpiar para evitar duplicados
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('apprentices')->truncate();
        DB::table('instructors')->truncate();
        DB::table('courses')->truncate();
        DB::table('areas')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // 1. Áreas (10 registros)
        DB::table('areas')->insert([
            ['id' => 1, 'name' => 'Análisis y Desarrollo de Software', 'code' => 'ADSO-01'],
            ['id' => 2, 'name' => 'Redes y Seguridad Informática', 'code' => 'RED-02'],
            ['id' => 3, 'name' => 'Multimedia y Producción de Contenidos', 'code' => 'MUL-03'],
            ['id' => 4, 'name' => 'Gestión Empresarial y Talento Humano', 'code' => 'GES-04'],
            ['id' => 5, 'name' => 'Contabilidad y Finanzas', 'code' => 'CON-05'],
            ['id' => 6, 'name' => 'Mecatrónica y Automatización', 'code' => 'MEC-06'],
            ['id' => 7, 'name' => 'Mantenimiento de Equipos de Cómputo', 'code' => 'MAN-07'],
            ['id' => 8, 'name' => 'Logística y Cadena de Suministro', 'code' => 'LOG-08'],
            ['id' => 9, 'name' => 'Gastronomía y Cocina Nacional', 'code' => 'GAS-09'],
            ['id' => 10, 'name' => 'Energías Renovables', 'code' => 'ENE-10'],
        ]);

        // 2. Cursos (10 registros)
        DB::table('courses')->insert([
            ['id' => 1, 'name' => 'Tecnólogo en Análisis y Desarrollo de Software - Ficha 1', 'code' => 'ADSO-2834101'],
            ['id' => 2, 'name' => 'Tecnólogo en Análisis y Desarrollo de Software - Ficha 2', 'code' => 'ADSO-2834102'],
            ['id' => 3, 'name' => 'Técnico en Instalación de Redes LAN y WAN', 'code' => 'RED-2911201'],
            ['id' => 4, 'name' => 'Técnico en Animación y Producción 3D', 'code' => 'MUL-3022301'],
            ['id' => 5, 'name' => 'Tecnólogo en Gestión Administrativa', 'code' => 'GES-3133401'],
            ['id' => 6, 'name' => 'Tecnólogo en Contabilidad y Finanzas', 'code' => 'CON-3244501'],
            ['id' => 7, 'name' => 'Técnico en Automatización Industrial', 'code' => 'MEC-3355601'],
            ['id' => 8, 'name' => 'Técnico en Soporte de Hardware', 'code' => 'MAN-3466701'],
            ['id' => 9, 'name' => 'Tecnólogo en Gestión Logística', 'code' => 'LOG-3577801'],
            ['id' => 10, 'name' => 'Técnico en Cocina y Bar', 'code' => 'GAS-3811101'],
        ]);

        // 3. Instructores (EXCLUSIVAMENTE David Santacruz)
        DB::table('instructors')->insert([
            ['id' => 1, 'name' => 'David Santacruz', 'email' => 'davidalexanderchangosantacruz@gmail.com', 'phone' => '3001234567']
        ]);

        // 4. Aprendices (Resto de correos y nombres)
        DB::table('apprentices')->insert([
            ['id' => 1, 'name' => 'Carlos Alberto Pérez', 'email' => 'caperez@sena.edu.co', 'phone' => '3111111111'],
            ['id' => 2, 'name' => 'María Fernanda Gómez', 'email' => 'mfgomez@sena.edu.co', 'phone' => '3222222222'],
            ['id' => 3, 'name' => 'Jorge Enrique Ramírez', 'email' => 'jeramirez@sena.edu.co', 'phone' => '3333333333'],
            ['id' => 4, 'name' => 'Ana Milena Torres', 'email' => 'amtorres@sena.edu.co', 'phone' => '3444444444'],
            ['id' => 5, 'name' => 'Luis Fernando Castro', 'email' => 'lfcastro@sena.edu.co', 'phone' => '3555555555'],
            ['id' => 6, 'name' => 'Claudia Patricia Ruiz', 'email' => 'cpruiz@sena.edu.co', 'phone' => '3666666666'],
            ['id' => 7, 'name' => 'Héctor Fabio Vargas', 'email' => 'hfvargas@sena.edu.co', 'phone' => '3777777777'],
            ['id' => 8, 'name' => 'Diana Marcela Herrera', 'email' => 'dmherrera@sena.edu.co', 'phone' => '3888888888'],
            ['id' => 9, 'name' => 'Esteban David Orozco', 'email' => 'edorozco@sena.edu.co', 'phone' => '3999999999'],
            ['id' => 10, 'name' => 'Valentina Morales Restrepo', 'email' => 'v.morales@sena.edu.co', 'phone' => '3100000000'],
            ['id' => 11, 'name' => 'Mateo Alejandro Silva', 'email' => 'mateo.silva@misena.edu.co', 'phone' => '3121234567'],
        ]);
    }
}
