import { ProfileNav } from '@/types'
import React from 'react'

const UserProfile = ({ type }: ProfileNav) => {
    return (
        <div>
            {type === 'profile' && (
                <>
                    Profile
                </>
            )}
        </div>
    )
}

export default UserProfile
