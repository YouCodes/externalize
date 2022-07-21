import React from 'react'
import { useQuery } from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'
import Loader from './Loader'

const Clients = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS)

    if(loading) return <Loader />
    if(error) return <p>Error but dont panic!</p>
  return (
    <>
        { !loading && !error && (
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.clients.map(client => (
                            <ClientRow key={client.id} client={client}/>
                        ))
                    }
                </tbody>
            </table>
        )}
    </>
  )
}

export default Clients