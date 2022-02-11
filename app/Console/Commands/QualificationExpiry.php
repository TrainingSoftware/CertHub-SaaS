<?php

namespace App\Console\Commands;

use App\Jobs\QualificationReminderJob;
use Illuminate\Console\Command;

class QualificationExpiry extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'qualification:reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remind User and Employers of Qualification Expiry';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        QualificationReminderJob::dispatch();
    }
}
