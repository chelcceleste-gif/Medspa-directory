import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
  try {
    console.log('Testing Supabase connection...')
    
    const { data, error } = await supabase
      .from('medspas')
      .select('*')
      .limit(5)
    
    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ 
        success: false, 
        error: error.message,
        details: error 
      })
    }
    
    console.log('Query successful, found:', data?.length || 0, 'med spas')
    
    return NextResponse.json({ 
      success: true, 
      count: data?.length || 0,
      data: data?.map(spa => ({
        id: spa.id,
        name: spa.name,
        city: spa.city,
        image_url: spa.image_url,
        hasImage: !!spa.image_url
      })) || []
    })
    
  } catch (err) {
    console.error('Connection error:', err)
    return NextResponse.json({ 
      success: false, 
      error: err instanceof Error ? err.message : 'Unknown error' 
    })
  }
}
