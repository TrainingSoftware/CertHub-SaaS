<?php

namespace App\Policies;

use App\Models\Tender;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TenderPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Tender $tender)
    {
        return $user->companies()->first()->id === $tender->company->id;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Tender $tender)
    {
        return $user->companies()->first()->id === $tender->company->id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Tender $tender)
    {
        return $user->companies()->first()->id === $tender->company->id;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Tender $tender)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Tender  $tender
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Tender $tender)
    {
        //
    }
}
